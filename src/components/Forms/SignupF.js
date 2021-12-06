import React, {useState, useEffect} from "react";
import { Redirect } from "react-router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { BiSleepy } from "react-icons/bi";
import * as Yup from "yup";
import axios from "axios"
import SmallNotification from "../Notification/SmallNotification";

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
    .min(2, 'Too short!')
    .max(20, 'Too Long!')
    .required('*Required'),
    lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('*Required'),
    
})

function validateLastname(value) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!'
    }
    return error;

}
const SignUpForm = () => {
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState('')
    function email(value){
        if (!value) {
            setError('*Required');
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setError('Invalid email address');
          }else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
               axios.post('http://localhost:8000/auth/email.query', {
                   "email": value,
                   
               })
               .then(function (response) {
                   console.log(response.data.message);
                   if (response.data.message === 'no') {
                    setError('Email already exists');
                    
                   }
                   if (response.data.message === 'yes') {
                    setError('');
                   }
                   
       
               })
               .catch(function (error) {
                   console.log(error);
               });
           
         }
         return error;

    }
    if(redirect){
        return <Redirect to={'/'} />
    }
    return (
        <>
        {error === 'Email already exists' &&
            <SmallNotification />
        }
        
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
                fetch('http://localhost:8000/auth/signup', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(values, null, 2)
                })
                .then(function (response){
                    if (response.ok){
                        setRedirect(true)
                    }else if (!response.ok){
                        setError('Service unavailable, Try again later')
                    }
                })
               
            }
                
            }
        >
            
            {({ isSubmitting, errors, touched }) => (
                
                <Form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="firstname" className="sr-only">First Name</label>
                            <Field name="firstname" placeholder="First Name" 
                            className="appearance-none  rounded-lg my-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            
                            />
                                {errors.firstname && touched.firstname ? (
                                    <div className="text-red-500 font-sans text-xs mb-2">
                                        {errors.firstname}
                                        </div>
                                ) : null}
                           
                        </div>
                        <div>
                            <label htmlFor="lastname" className="sr-only" >Last Name</label>
                            <Field name="lastname" placeholder="Last Name" 
                            className="appearance-none rounded-lg my-1 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            validate={validateLastname}
                            />
                                {errors.lastname && touched.lastname ? (
                                    <div className="text-red-500 font-sans text-xs mb-2">
                                        {errors.lastname}
                                        </div>
                                ) : null}
                            
                        </div>
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
                        SignUp
                    </button>
                </Form>
            )}
        </Formik>
        </>
    )
}
export default SignUpForm