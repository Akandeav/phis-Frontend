import axios from "axios"
import React from "react"
import { useState } from "react"
import { Redirect, useParams } from "react-router"
import logo from "../../assets/img/logo.png"
import ForgotPwdForm from "../../components/Forms/ForgotPwdForm"
import { useJwt } from "react-jwt"

const ForgotPwd = () => {
    const {id} = useParams()
    
    return (
        <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg shadow-lg p-6 m-4 bg-gray-100 border-0 md:max-w-sm md:mx-auto">
                <div>
                    <a
                    href="/"
                    className="h-20 w-full flex justify-center items-center py-2 px-4 "
                    >
                    <img src={logo} alt="" />        
                    </a>
                    <h2 className="font-sans font-thin text-xl mt-5 text-indigo-600 mx-auto text-center ">Enter new Password</h2>
                   <ForgotPwdForm token={id} />
                    
                </div>

            </div>
            </div>
        </div>
        </>
    )

}
export default ForgotPwd