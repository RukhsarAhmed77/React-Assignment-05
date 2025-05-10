// import React from 'react';
// import { useParams } from 'react-router-dom';

// export default function Dashboard() {
//   const { email } = useParams();

//   return (
//     <div className="container-fluid mt-4">
//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-md-3 col-lg-2 bg-light p-3 border-end">
//           <h5 className="mb-4">Dashboard Menu</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a className="nav-link text-dark" href="#">Overview</a>
//             </li>
//             <li className="nav-item mb-2">
//               <a className="nav-link text-dark" href="#">Profile Settings</a>
//             </li>
//             <li className="nav-item mb-2">
//               <a className="nav-link text-dark" href="#">Messages</a>
//             </li>
//             <li className="nav-item mb-2">
//               <a className="nav-link text-dark" href="#">Analytics</a>
//             </li>
//             <li className="nav-item mb-2">
//               <a className="nav-link text-danger" href="#">Logout</a>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-9 col-lg-10 p-4">
//           <h2 className="mb-4">Welcome, <span className="text-primary">{email}</span></h2>

//           {/* Summary Cards */}
//           <div className="row mb-4">
//             <div className="col-md-4">
//               <div className="card shadow-sm border-0">
//                 <div className="card-body">
//                   <h6 className="card-title text-muted">Total Projects</h6>
//                   <h3 className="card-text">12</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card shadow-sm border-0">
//                 <div className="card-body">
//                   <h6 className="card-title text-muted">Messages</h6>
//                   <h3 className="card-text">7</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card shadow-sm border-0">
//                 <div className="card-body">
//                   <h6 className="card-title text-muted">Active Sessions</h6>
//                   <h3 className="card-text">3</h3>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="card shadow-sm border-0">
//             <div className="card-header bg-white">
//               <h5 className="mb-0">Recent Activity</h5>
//             </div>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">Logged in from new device - 10 mins ago</li>
//               <li className="list-group-item">Updated profile settings - 2 hours ago</li>
//               <li className="list-group-item">Completed Project Alpha - Yesterday</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
