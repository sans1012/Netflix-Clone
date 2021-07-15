/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "./Profile.css";
import Nav from "../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import  { auth } from "../firebase";

export default function ProfileScreen() {
      const user=useSelector(selectUser);
      console.log(user.email);
     
      return (
            <div className="profileScreen">
                  <Nav />
                  <div className="proifleScreen__Body">
                        <h1>Edit Profile</h1>
                        <div className="profileScreen__info">
                              <img 
                              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                              alt=""
                              />
                              <div className="profileScreen__details">
                                    <h2>{user.email}</h2>
                                    <div className="profileScreen__plans">
                                         
                                         <h3 style={{"color":"white"}}>Plans</h3> 
                                          <hr />

                                          <div style={{"color":"white"}}>
                                          Renewal Data
                                          </div>

                                          <div className="plan">
                                          Netflix Standard 
                                          1080
                                          <button className="subscribe">Subscribe</button>
                                          </div>
                                          
                                          <div className="plan">
                                          Netflix Basic
                                          480
                                          <button className="subscribe">Subscribe</button>
                                          </div>
                                          
                                          <div className="plan">
                                          Netflix Premium
                                          
                                          <br />
                                          4K+HDR
                                          <button className="subscribe">Subscribe</button>
                                          </div>
                                          
                                    </div>



                                    <div className="ProifleScreen__Plans">
                                    <button 
                                    onClick={() =>auth.signOut()}
                                    className="ProfileScreen__Logout">Logout</button>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
}
