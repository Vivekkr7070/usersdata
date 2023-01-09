// import React from 'react'
// import { Link } from 'react-router-dom'
//  import  "./lgcss/navbar.css"
// export default function Navbar() {

//   return (
//     <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         {/* <nav className="navbar navbar navbar-dark bg-dark"> */}
//   <div className="container-fluid">
//   {/* <div className=".flex-sm-column"> */}
//     <Link className="navbar-brand container-fluid navbar-nav ul" to="/ada">Index page</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
//       <ul className="container-fluid navbar-nav ul">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/suggestion">Suggestion</Link>
//         </li>     
//         <li className="nav-item">
//           <Link className="nav-link" to="/newindex">Newindex</Link>
//         </li> 
//        </ul>   
//     </div>
//   </div>
// </nav>
// </div>
// )
// }


// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Bootstrap 5 Side Bar Navigation</title>
//   <!-- bootstrap 5 css -->
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
//   <!-- BOX ICONS CSS-->
//   <link href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
//   <!-- custom css -->
//   <link rel="stylesheet" href="style.css" />
// </head>

// <body>
//   <!-- Side-Nav -->
//   <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
//     <ul class="nav flex-column text-white w-100">
//       <a href="#" class="nav-link h3 text-white my-2">
//         Responsive </br>SideBar Nav
//       </a>
//       <li href="#" class="nav-link">
//         <i class="bx bxs-dashboard"></i>
//         <span class="mx-2">Home</span>
//       </li>
//       <li href="#" class="nav-link">
//         <i class="bx bx-user-check"></i>
//         <span class="mx-2">Profile</span>
//       </li>
//       <li href="#" class="nav-link">
//         <i class="bx bx-conversation"></i>
//         <span class="mx-2">Contact</span>
//       </li>
//     </ul>

//     <span href="#" class="nav-link h4 w-100 mb-5">x
//       <a href=""><i class="bx bxl-instagram-alt text-white"></i></a>
//       <a href=""><i class="bx bxl-twitter px-2 text-white"></i></a>
//       <a href=""><i class="bx bxl-facebook text-white"></i></a>
//     </span>
//   </div>

//   {/* <!-- Main Wrapper --> */}
//   <div class="p-1 my-container active-cont">
   
//     <nav class="navbar top-navbar navbar-light bg-light px-5">
//       <a class="btn border-0" id="menu-btn"><i class="bx bx-menu"></i></a>
//     </nav>
   
//     <h3 class="text-dark p-3">RESPONSIVE SIDEBAR NAV 💻 📱
//     </h3>
//     <p class="px-3">Responsive navigation sidebar built using <a class="text-dark" href="https://getbootstrap.com/">Bootstrap 5</a>.</p>
//     <p class="px-3"><a href="https://github.com/harshitjain-hj" class="text-dark">Checkout my Github</a></p>
//   </div>

//   <!-- bootstrap js -->
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
// </body>

// </html>

import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
       <ul className="nav flex-column text-white w-100">
      <Link to="/ss" class="nav-link h3 text-white my-2">
        Index page
      </Link>
      
      <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/suggestion">Suggestion</Link>
         </li>     
         
      
    </ul>

    </div>
    </>
  )
}
