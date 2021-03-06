import React, {useState, useEffect} from "react";
import { Redirect, useHistory } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useJwt } from "react-jwt"
import { useCookies } from "react-cookie";
import { BiMessage, BiSleepy } from "react-icons/bi";
import * as Yup from "yup";
import axios from "axios"
import SmallNotification from "../Notification/SmallNotification";


const InputEmail = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [False, setFalse] = useState(false)
    const [error, setError] = useState('')
    const [show, setShow ] = useState(false)
    const [isEmailValid, setValid] = useState(false)
   
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
    
    if(redirect){
        return <Redirect to = {{
            pathname: '/',
        }} />
    
    }
    
    return (
        <>
        { show === true && isEmailValid === false && False === false &&
        <button onClick={() => {
            setShow(false)
          }}>
          <SmallNotification status="error" message="Invalid Email" detail="Account not found. Check email and try again" />  
        </button>
         }
         { show === true && isEmailValid === true && False === false &&
        <button onClick={() => {
            setShow(false)
          }}>
          <SmallNotification status="ok" message="Success" detail="Password reset link has been sent to your email" />  
        </button>
         }
         { show === true && False === true &&
        <button onClick={() => {
            setShow(false)
          }}>
          <SmallNotification status="error" message="Invalid Request" detail="User already verified" />  
        </button>
         }
        <Formik
            initialValues={{
                email: '',
            
            }}
            
            onSubmit={async (values) => {
                fetch('http://localhost:8000/auth/email.query', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(values, null, 2)
                })
                .then(function (response){
                    if (!response.ok){
                       return <Redirect to={"/error"} />
                    }
                    else if (response.ok){
                        response.json().then(data => {
                            if (data.message === 'no' && data.verified === false){
                            setValid(true)
                            setShow(true)
                            axios.post(props.link, {
                                "email": values['email']
                            })
                            }else if(data.message === 'no' && data.verified === true){
                                setFalse(true)
                                setShow(true)
                            }
                            else {
                                setValid(false)
                                setShow(true)
                            }
                               
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
export default InputEmail