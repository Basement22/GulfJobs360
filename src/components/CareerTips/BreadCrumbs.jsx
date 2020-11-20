import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '20px'}} >
      <Link color="inherit" href="/" onClick={handleClick}>
        Services
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Career-Tips
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Lorem-Ipsum
      </Link>
    </Breadcrumbs>
  );
}
