import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <div class="four_zero_four_bg">
      <h1 className="display-1">404</h1>
      </div>
      <p className="lead">Page Not Found</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}