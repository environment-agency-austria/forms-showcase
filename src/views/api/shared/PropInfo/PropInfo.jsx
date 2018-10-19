import React from 'react';
import PrismCode from 'react-prism';

function PropInfo(props) {
  const {
    name,
    type,
    defaultValue,
    description,
    required,
    deprecated,
    example,
    children
  } = props;

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
        {example ? <PrismCode className="lang-jsx" component="pre">{example}</PrismCode> : ''}
      </div>
    </div>
  );
}

export default PropInfo;
