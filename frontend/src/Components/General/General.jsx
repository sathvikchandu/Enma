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
          <ul className="header_ul">
            <li>
              <div className="header_li">
                <p>Home</p>
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
                onClick={() => navigate("/signin")}
              >
                Sign-in/Sign-up
              </button>
            </li>
          </ul>
        </div>

        <div className="body">
          <div className="content">
            <h1>Hello world</h1>
            <p className="dummy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              maxime quod recusandae laboriosam praesentium nesciunt
              voluptatibus, nobis alias beatae exercitationem! Ab placeat
              corporis nam consequuntur voluptas reiciendis provident tempore
              enim?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia similique delectus vitae officiis ducimus explicabo
              quisquam eum expedita. Accusantium magnam asperiores maxime labore
              ratione iste minima tempora nam, ipsam ipsum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aperiam quasi amet itaque
              assumenda facilis minima ullam rerum, delectus quas, nesciunt quae
              veniam beatae modi reprehenderit ducimus facere dolorem culpa
              natus.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quo maxime quod recusandae laboriosam praesentium nesciunt
              voluptatibus, nobis alias beatae exercitationem! Ab placeat
              corporis nam consequuntur voluptas reiciendis provident tempore
              enim?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia similique delectus vitae officiis ducimus explicabo
              quisquam eum expedita. Accusantium magnam asperiores maxime labore
              ratione iste minima tempora nam, ipsam ipsum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aperiam quasi amet itaque
              assumenda facilis minima ullam rerum, delectus quas, nesciunt quae
              veniam beatae modi reprehenderit ducimus facere dolorem culpa
              natus.
            </p>
          </div>
          <div className="content">
            <h1>Hello world</h1>
            <p className="dummy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              maxime quod recusandae laboriosam praesentium nesciunt
              voluptatibus, nobis alias beatae exercitationem! Ab placeat
              corporis nam consequuntur voluptas reiciendis provident tempore
              enim?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia similique delectus vitae officiis ducimus explicabo
              quisquam eum expedita. Accusantium magnam asperiores maxime labore
              ratione iste minima tempora nam, ipsam ipsum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aperiam quasi amet itaque
              assumenda facilis minima ullam rerum, delectus quas, nesciunt quae
              veniam beatae modi reprehenderit ducimus facere dolorem culpa
              natus.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quo maxime quod recusandae laboriosam praesentium nesciunt
              voluptatibus, nobis alias beatae exercitationem! Ab placeat
              corporis nam consequuntur voluptas reiciendis provident tempore
              enim?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia similique delectus vitae officiis ducimus explicabo
              quisquam eum expedita. Accusantium magnam asperiores maxime labore
              ratione iste minima tempora nam, ipsam ipsum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aperiam quasi amet itaque
              assumenda facilis minima ullam rerum, delectus quas, nesciunt quae
              veniam beatae modi reprehenderit ducimus facere dolorem culpa
              natus.
            </p>
          </div>
          <div className="content">
            <h1>Hello world</h1>
            <p className="dummy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              maxime quod recusandae laboriosam praesentium nesciunt
              voluptatibus, nobis alias beatae exercitationem! Ab placeat
              corporis nam consequuntur voluptas reiciendis provident tempore
              enim?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia similique delectus vitae officiis ducimus explicabo
              quisquam eum expedita. Accusantium magnam asperiores maxime labore
              ratione iste minima tempora nam, ipsam ipsum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aperiam quasi amet itaque
              assumenda facilis minima ullam rerum, delectus quas, nesciunt quae
              veniam beatae modi reprehenderit ducimus facere dolorem culpa
              natus.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quo maxime quod recusandae laboriosam praesentium nesciunt
              voluptatibus, nobis alias beatae exercitationem! Ab placeat
              corporis nam consequuntur voluptas reiciendis provident tempore
              enim?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia similique delectus vitae officiis ducimus explicabo
              quisquam eum expedita. Accusantium magnam asperiores maxime labore
              ratione iste minima tempora nam, ipsam ipsum. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Aperiam quasi amet itaque
              assumenda facilis minima ullam rerum, delectus quas, nesciunt quae
              veniam beatae modi reprehenderit ducimus facere dolorem culpa
              natus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
