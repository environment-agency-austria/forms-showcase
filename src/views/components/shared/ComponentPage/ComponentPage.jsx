import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ComponentPage(props) {
  const {
    title,
    description,
    children,
    parent,
    ...rest
  } = props;

  let parentLabel = null;
  switch (parent) {
    case "core":
      parentLabel = "react-ocean-forms";
      break;

    case "bootstrap":
      parentLabel = "react-ocean-forms-bootstrap";
      break;

    case "intl":
      parentLabel = "react-ocean-forms-react-intl";
      break;

    default:
      break;
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

export default ComponentPage;
