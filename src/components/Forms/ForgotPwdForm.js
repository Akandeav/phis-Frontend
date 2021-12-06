import React, {useState, useEffect} from "react";
import { Redirect, useHistory } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useJwt } from "react-jwt"
import { useCookies } from "react-cookie";
import { BiMessage, BiSleepy } from "react-icons/bi";
import * as Yup from "yup";
import axios from "axios"
import SmallNotification from "../Notification/SmallNotification";


const ForgotPwdForm = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(false)
    const [show, setShow ] = useState(false)
    const token = props.token
    const { isExpired } = useJwt(token)
    
    if(isExpired){
        return <Redirect to={'/expired'} />
    }
    
    
    if(redirect){
        return <Redirect to = {{
            pathname: '/auth/signin',
        }} />
    }
    if(error){
        return <Redirect to={'/error'} />
    }
    return (
        <>
        { show === true &&
        <button onClick={() => {
            setShow(false)
          }}>
          <SmallNotification status="ok" message="Success! Password changed" detail="Please wait...Redirecting" />  
        </button>
         }
        <Formik
            initialValues={{
                password: '',
            }}
            
            onSubmit={(values) => {
                axios.post('http://localhost:8000/auth/forgot.password',{
                    "password": values['password'],
                    "id": token,
                })
                .then(function(response){
                    if (response.ok){
                        setShow(true)
                        setRedirect(true)
                    }else if(!response.ok){
                        setError(true)
                    }
                })
                  
            }
                
            }
        >
            
            {({ isSubmitting, errors, touched }) => (
                
                <Form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                    <div> 
                            <label htmlFor="password" className="sr-only">Password</label>
                            <Field name="password" placeholder="Password" type="password"
                            className="appearance-none rounded-lg my-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            required
                            autoComplete="current-password"
                            />
                        </div>
                        <div>
                        <label htmlFor="password" className="sr-only">Confirm Password</label>
                        <Field name="password1" placeholder="Confirm password" type="password"
                        className="appearance-none rounded-lg  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required
                        />
                        </div>
                        
                    </div>
                    <button type="submit" 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isSubmitting}>
                       Submit
                    </button>
                </Form>
            )}
        </Formik>
        </>
    )
}
export default ForgotPwdForm