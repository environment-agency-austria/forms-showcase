import * as React from 'react';

interface IPropInfoProps {
  name: string;
  required: boolean;
  deprecated: boolean;
  // tslint:disable-next-line:no-reserved-keywords
  type?: string;
  defaultValue?: string;
  description?: string;
}

export class PropInfo extends React.Component<IPropInfoProps> {
  // tslint:disable-next-line:typedef
  public static defaultProps = {
    required: false,
    deprecated: false,
  };

  public render(): JSX.Element {
    const {
      name,
      type,
      defaultValue,
      description,
      required,
      deprecated,
      children,
    } = this.props;

    return (
      <div className="prop-info">
        <h5 id={name}>
          {name}
          {deprecated ? <span className="text-danger font-italic"> deprecated</span> : null}
          {required || type || defaultValue ? <br /> : null}
          {required ? <span className="text-danger font-italic">Required </span> : null}
          {type ? <span className="text-info font-weight-normal font-italic">{type}</span> : null}
          {defaultValue ? <span className="text-info font-weight-normal font-italic">, default: {defaultValue}</span> : null}
        </h5>
        <div className="meta">
          {description ? <p>{description}</p> : ''}
          {children}
        </div>
      </div>
    );
  }
}
