import { LockClosedIcon } from '@heroicons/react/solid'
import { BiKey } from 'react-icons/bi'
import SignUpForm from '../../components/Forms/SignupF'
import React from 'react'
import logo from "../../assets/img/logo.png"
const Signup = () => {
    return (
        <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg shadow-lg p-6 m-4 bg-gray-100 border-0 md:max-w-sm md:mx-auto">
              <div >
                <a
                    href="/"
                    className="h-20 w-full flex justify-center items-center py-2 px-4 "
                  >
                    <img src={logo} alt="" />        
                  </a>
                  <h2 className="font-sans font-bold text-indigo-600 mx-auto text-center text-3xl">Create your account</h2>
                  <SignUpForm />
                <div className="text-center text-sm ">
                  <hr className="mt-6 mb-6 border-blueGray-300"></hr>
                  <span>already have an account?</span>
                  <div className="mt-3 text-sm">
                   <a href="/auth/signin"><span className="font-medium text-sm text-indigo-600 hover:text-indigo-500">Signin</span></a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </>
    )
}
export default Signup