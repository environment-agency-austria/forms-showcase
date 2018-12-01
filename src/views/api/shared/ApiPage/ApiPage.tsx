import * as React from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { SyntaxHighlighter } from '../../../../components/SyntaxHighlighter';

interface IApiPageProps {
  title: string;
  description: string;
  codeExample: string;
  parent: 'core' | 'bootstrap' | 'intl';
  hideComponentLink: boolean;
}

export class ApiPage extends React.Component<IApiPageProps> {
  // tslint:disable-next-line:typedef
  public static defaultProps = {
    hideComponentLink: false,
  };

  public render(): JSX.Element {
    const {
      title,
      description,
      codeExample,
      children,
      parent,
      hideComponentLink,
      ...rest
    } = this.props;

    let parentLabel = null;
    switch (parent) {
      case 'core':
        parentLabel = 'react-ocean-forms';
        break;

      case 'bootstrap':
        parentLabel = 'react-ocean-forms-bootstrap';
        break;

      case 'intl':
        parentLabel = 'react-ocean-forms-react-intl';
        break;

      default:
        throw new Error('Unsupported parent type');
    }

    const componentLink = title.replace(/(?!^)[A-Z]/g, (match) => `-${match}`).toLowerCase();

    return (
      <div className="component-page" {...rest}>
        <Breadcrumb>
          <BreadcrumbItem>API</BreadcrumbItem>
          <BreadcrumbItem>{parentLabel}</BreadcrumbItem>
          <BreadcrumbItem tag="strong">{title}</BreadcrumbItem>
        </Breadcrumb>

        <h1>
          {title}
          {' '}{!hideComponentLink && <Link to={`/components/${parent}/${componentLink}`}>(go to Showcase)</Link>}
        </h1>
        <p>{description}</p>
        <SyntaxHighlighter code={codeExample} />

        {children}
      </div>
    );
  }
}
