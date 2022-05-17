// import React from 'react'
// //import Navbar from './Navbar'

// import './General.css'
// import {useNavigate} from 'react-router-dom'
// function General() {
//     const navigate = useNavigate()
//     //const location = useLocation()
//     return (
//         <>

//             <div className='General-navbar'>
//                 <div className="navbar-internal">
//                     <ul className='navbar-ul'>
//                         <li className='navbar-li'><button className='btn_nav'>Home</button></li>
//                         <li className='navbar-li'><button className='btn_nav'>About us</button></li>
//                         <li id="achievements"className='navbar-li'><button className='btn_nav'>Achievements</button></li>
//                         <li className='navbar-li'><button className='btn_nav'>Contact us</button></li>
//                         <div className="nav_btn">

//                             <button className="btn_nav" onClick={()=> navigate('/signup_support')}>Sign-in/Sign-up</button>

//                         </div>

//                     </ul>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default General

import React from "react";
//import Navbar from './Navbar'

import "./General.css";
import { useNavigate } from "react-router-dom";
function General() {
  const navigate = useNavigate();
  //const location = useLocation()
  return (
    <>
      {/* <div className='General-navbar'>
                <div className="navbar-internal">
                    <ul className='navbar-ul'>
                        <li className='navbar-li'><button className='btn_nav'>Home</button></li>
                        <li className='navbar-li'><button className='btn_nav'>About us</button></li>
                        <li id="achievements"className='navbar-li'><button className='btn_nav'>Achievements</button></li>
                        <li className='navbar-li'><button className='btn_nav'>Contact us</button></li>
                        <div className="nav_btn">
                            
                            <button className="btn_nav" onClick={()=> navigate('/signin')}>Sign-in/Sign-up</button>

                            
                        </div>

                    </ul>

                </div>
            </div> */}
      <div className="body">
        <div class="navBar">
          <h1 className="p-0">Enterprise management system</h1>
          <ul className="header_ul">
            <li>
              <div className="header_li">
                <button className="btn p-0 text-light" onClick={() => navigate("/")}
>Home</button>
              </div>
            </li>
            <li>
              <div className="header_li">
                <p>About</p>
              </div>
            </li>
            <li>
              <div className="header_li">
                <p>Achievement</p>
              </div>
            </li>
            <li>
              <div className="header_li">
                <p>Contact Us</p>
              </div>
            </li>
            <li>
              <button
                className="nav_btn m-0"
                onClick={() => navigate("/whoru")}
              >
                Sign-in/Sign-up
              </button>
            </li>
          </ul>
        </div>

        <div className="body">
          <div className="content">
            <h1>About us</h1>
            <p className="dummy">
            Enterprise management system was founded in 2020. people around
              the world trust ems for their project management services.this
              website helps the companies to sort all the projects received from
              the client. the website help to veiw past, on going and pending
              projects.the main purpose here is the client from different
              companies signup into the page to post their projects , the cient
              can also view the past projects done by the company and view the
              ongoing projects.once the project is posted the project manager
              selects the posted projects and assign a group of developers who
              are specialized in the particular areas
            </p>
          </div>
          <div className="content">
            <h1>Achievements</h1>
            <p className="dummy">
            As a part of an extremely dynamic economic environment where competition keeps us on our toes, we are proud to share such remarkable results.
It is declared that ems portal is in top 4 position worldwide as the best project handling website suggested by many companies.
 We are proud  to attain a success rate of 97% in the south asia-keeping industry standards in mind, this is the highest as we are slowly growing from a seedling to big banyan tree which grows its branches by helping the companies with their projects and clients.

A lot of this has depended directly on our Clients who have relentlessly supported us in our journey and helped us by completing honest surveys of our services. We reviewed and evaluated hundreds of Customer Surveys to identify and implement the best suggestions.
We take this chance to also extend our gratitude towards our Partners who are always ready and willing to deal with new challenges.
Our warmest and most special thanks to our team of extraordinary experts, who have passionately worked towards completing customer requests with the highest standards of dedication, punctuality, and reliability..
            </p>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default General;
