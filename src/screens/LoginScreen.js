import React,{ useState} from 'react'
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
      const [signIn, setSignIn]=useState(false);
      

      return (
            <div className="LoginScreen">
                  <div className="loginScreen__background">
                        <img 
                        className="LoginScreen__Logo"
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                        alt="login logo" />
                        <button onClick={()=>setSignIn(true)}className="LoginScreen_Button">Sign In</button>
                        <div className="LoginScreen__gradient" />  
                  </div>
                  <div className="LoginScreen__Body" >
                  {signIn? (
                  <SignUpScreen />
                  ):(
                        <>
                              <h1>
                                    Unlimited Films, Tv Programmes and more.
                              </h1>
                              <h2>
                                    Watch anywhere. Cancel at anytime
                              </h2>
                              <h3>
                                    Ready to Watch? Enter  your email to create or restart your membership
                              </h3>
                              <div className="loginScreen__Input">
                                    <form>
                                          <input type="email" placeholder="Enter your email address" required/>

                                          <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                                    </form>
                              </div>
                        </>
                  )}
                  </div>
            </div>);
      
}

export default LoginScreen
