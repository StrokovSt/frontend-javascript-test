import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavigationComponent({pageCount}) {
  const getNavigationLinks = (linksQuantity) => {
    let links = [];
    for (let i = 0; i < linksQuantity; i++) {
      links.push(<li key={i}><NavLink to={"/main/" + (i === 0 ? "" : i)}>Страница {i}</NavLink></li>)
    }
    return links;
  }

  return (
    <ul className="page-main__navigation navigation">{getNavigationLinks(pageCount)}</ul>
  )
}