import React from 'react';
import { Link } from 'react-router-dom';

export const SiteNavigation = () => <nav className="global right">
  <Link to="/about">About us</Link>
  <Link className="button" to="/give">Give Now</Link>
</nav>
