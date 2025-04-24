import React from 'react';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const { email } = useParams();

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Welcome, {email}</h5>
          <p className="card-text">This is your personalized dashboard.</p>
        </div>
      </div>
    </div>
  );
}