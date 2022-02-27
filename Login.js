import React, { useState, useRef } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth, signUp, login, useAuth, logout } from "./firebase";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
   } from "firebase/auth"

function Login() {
    const currentUser = useAuth();


    const [ loading, setLoading ] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignUp() {

        setLoading(true)
        try{
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!")
        }
        setLoading(false)
        
    }

    async function handleLogin() {

        setLoading(true)
        try{
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Account doesn't exist! Create an Account")
        }
        setLoading(false)
        
    }

    async function handleLogout() {
        setLoading(true)
        try{
            await logout();
        } catch {
            alert("Error!")
        }
        setLoading(false)
    }

    // async function handleLogin() {

    //     setLoading(true)
    //     try{
    //         await login(emailRef.current.value, passwordRef.current.value);
    //     } catch {
    //         alert("Error!")
    //     }
    //     setLoading(false)
        
    // }

    // const [registerEmail, setRegisterEmail] = useState("")
    // const [registerPassword, setRegisterPassword] = useState("")
    // const [loginEmail, setLoginEmail] = useState("")
    // const [loginPassword, setLoginPassword] = useState("")

    // const [user, setUser] = useState({});

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // })

    // const register = async () => {
    //     try{
    //         const user = await createUserWithEmailAndPassword(
    //             auth, 
    //             registerEmail, 
    //             registerPassword
    //         );
    //         console.log(user);
    //     } catch (error){
    //         console.log(error.message);
    //     }
    // };

    // const login = async () => {
    //     try{
    //         const user = await signInWithEmailAndPassword(
    //             auth, 
    //             loginEmail, 
    //             loginPassword
    //         );
    //         console.log(user);
    //     } catch (error){
    //         console.log(error.message);
    //     }
    // };

    // const logout = async () => {
        
    // }

    // const history = useHistory();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const signIn = e => {
    //     e.preventDefault();

    //     // auth
    //     //     .signInWithEmailAndPassword(email, password)
    //     //     .then(auth => {
    //     //         history.push('/')
    //     //     })
    //     //     .catch(error => alert(error.message))
    // }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // it successfully created a new user with email and password
    //             if (auth) {
    //                 console.log(auth);
    //                // history.push('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text'
                        ref={emailRef} 
                        onChange={(event) => {
                            //setRegisterEmail(event.target.value);
                        }} 
                    />

                    <h5>Password</h5>
                    <input 
                        type='password'
                        ref={passwordRef}
                        onChange={(event) => {
                            //setRegisterPassword(event.target.value);
                        }}  
                    />

                    <button disabled={ loading || currentUser } type='submit' onClick={handleLogin}  className='login__signInButton'>Sign In</button>
                    <button disabled={ loading || !currentUser } type='submit' onClick={handleLogout}  className='login__signInButton'>Log Out</button>
                    {/* onClick={login} */}
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button disabled={ loading || currentUser } onClick={handleSignUp}  className='login__registerButton'>Create your Amazon Account</button> 
                {/* onClick={register} */}
            </div>
        </div>
    )
}

export default Login