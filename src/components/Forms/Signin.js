import React, {useState, useEffect} from "react";
import { Redirect, useHistory } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useJwt } from "react-jwt"
import { useCookies } from "react-cookie";
import { BiMessage, BiSleepy } from "react-icons/bi";
import * as Yup from "yup";
import axios from "axios"
import SmallNotification from "../Notification/SmallNotification";


const SignInForm = () => {
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState('')
    const [show, setShow ] = useState(false)
    const [token, setToken] = useState('')
    const { decodedToken, isExpired } = useJwt(token)
    const [ cookies, setCookie, removeCookie ] = useCookies(['plt']);
    function email(value){
        if (!value) {
            setError('*Required');
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setError('Invalid email address');
          }else {
            setError('')
          }
         return error;

    }
    let history = useHistory()
    function handleClick() {
        history.push("/");
      }
    if(redirect){
        return <Redirect to = {{
            pathname: '/',
        }} />
    }
    return (
        <>
        { show === true &&
        <button onClick={() => {
            setShow(false)
          }}>
          <SmallNotification status="error" message="Invalid Login" detail="Incorrect email or password" />  
        </button>
         }
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            
            onSubmit={async (values) => {
                fetch('http://localhost:8000/auth/signin', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(values, null, 2)
                })
                .then(function (response){
                    if (!response.ok){
                        setShow(true)
                    }
                    else if (response.ok){
                        response.json().then(data => {
                            setCookie('plt', data.token, { 'path': '/', 'maxAge': 3600});
                            
                            handleClick()
                            
                               
                        })
                    }   
                })  
            }
                
            }
        >
            
            {({ isSubmitting, errors, touched }) => (
                
                <Form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <Field name="email" placeholder="Email address" 
                            className="appearance-none rounded-lg my-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            autoComplete="email"
                            validate={email}
                            />
                                {errors.email && touched.email &&
                                    <div className="text-red-500 font-sans text-xs mb-2">
                                        {errors.email}
                                        </div>
                                }
                            
                        </div>
                        <div> 
                            <label htmlFor="password" className="sr-only">Password</label>
                            <Field name="password" placeholder="Password" type="password"
                            className="appearance-none rounded-lg my-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            required
                            autoComplete="current-password"
                            />
                        </div>
                        
                    </div>
                    <button type="submit" 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isSubmitting}>
                        Sign In
                    </button>
                </Form>
            )}
        </Formik>
        </>
    )
}
export default SignInForm