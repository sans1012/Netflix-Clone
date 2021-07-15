import React,{useRef} from 'react'
import "./SignUpScreen.css";
import {auth} from '../firebase';

function SignUpScreen() {
      const emailRef=useRef(null);
      const passwordRef=useRef(null);

      /*to prevent the constant refresh on signin and login buttons */

      const register =(e)=>{
            e.preventDefault();
            auth.createUserWithEmailAndPassword(emailRef.current.value,
            passwordRef.current.value)
            .then((authUser)=>{
                  console.log(authUser)

            })
            .catch((error)=>{

                  alert(error.message);
            })

      }

      const signIn=(e)=>{
            e.preventDefault();
            auth.signInWithEmailAndPassword(emailRef.current.value,
            passwordRef.current.value)
            .then((authUser)=>{
                  console.log(authUser);
            })
            .catch((error)=>
                  alert(error.message)
            )
      }

      return (
            <div className="signUpScreen">
                  <form>
                        <h1>Login</h1>
                        <input ref={emailRef} placeholder="Email" type="email"/>
                        <input ref={passwordRef}placeholder="Password" type="password"/>
                        <button type="submit" onClick={signIn}>Login</button>
                        {/* <button type="button">Sign In with Google</button> */}
                        <h4>
                        <span className="signUpScreen__grey">New to netflix? </span>
                        <span className="signUpScreen__link" onClick={register}> Sign Up Now!!
                        </span>              
                        </h4>
                  </form>
            </div>
      )
}

export default SignUpScreen;
