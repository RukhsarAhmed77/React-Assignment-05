import React from 'react';
import '../../src/index.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container text-center mt-5 not-found">
      <h1>404-Page Not Found</h1>
      <div class="four_zero_four_bg"></div>
      <p className="text-muted">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}