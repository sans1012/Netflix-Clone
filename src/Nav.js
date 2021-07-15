import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";

 function Nav() {
      const [show,handleShow]=useState(false);
      const history=useHistory();
      const transitionNavBar=()=>{
            if(window.scrollY>100){
                  handleShow(true);
            }
            else
            {
                  handleShow(false);     
            }
      };

useEffect(() => {
      window.addEventListener("scroll",transitionNavBar);
      //everytime we scroll the program will listen to transitionNavBar
      return () => window.removeEventListener("scroll",transitionNavBar);
}, []);

      return (
            <div className={`nav ${show &&"nav__black"}`}>
                  {/* only render the nav black class if show is true */}
                  <div className="nav_contents">
                  <img 
                  onClick={() => history.push("/")}
                  className="nav_logo"
                  src= "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                  alt="netflix-logo" />
                             
                  <ul className="app__nav">
                  <li><a href="App.js">Home</a></li>
          
                  <li><a href="App.js">Movies</a></li>
                  <li><a href="App.js">Series</a></li>
                  <li><a href="App.js">Featured</a></li>
                  </ul>
                    

                  <img
                  onClick={() => history.push("/profile")}
                  className="nav_avatar"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="avatar logo" />     
                  </div> 
                  
            </div>
      );
}

export default Nav;