import React from 'react';

import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

interface IComponentPageProps {
  title: string;
  description: string;
  parent: 'core' | 'bootstrap' | 'intl';
}

export class ComponentPage extends React.Component<IComponentPageProps> {
  public render(): JSX.Element {
    const {
      title,
      description,
      children,
      parent,
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

    const apiLink = title.replace(/(?!^)[A-Z]/g, (match) => `-${match}`).toLowerCase();

    return (
      <div className="component-page" {...rest}>
        <Breadcrumb>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>{parentLabel}</BreadcrumbItem>
          <BreadcrumbItem tag="strong">{title}</BreadcrumbItem>
        </Breadcrumb>

        <h1>
          {title}
          {' '}<Link to={`/api/${parent}/${apiLink}`}>(go to API documentation)</Link>
        </h1>
        <p>{description}</p>
        {children}
      </div>
    );
  }
}
