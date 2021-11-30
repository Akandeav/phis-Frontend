import axios from "axios"
import React from "react"
import { useState } from "react"
import { Redirect, useParams } from "react-router"
import logo from "../../assets/img/logo.png"
import ForgotPwdForm from "../../components/Forms/ForgotPwdForm"

const ForgotPwd = () => {
    const [ redirect, setRedirect ] = useState(false)
    const [error, setError ] = useState('')
    const {id} = useParams()
    if (id){
        axios.post('http://localhost:8000/auth/verify', {
            "B": id
        })
        .then(function(response){
            if (response.data.message === "Success Email is Verified"){
                setRedirect(true)
            } else if (response.data.message === "Email already verified"){
                <Redirect to={'/auth/error'} />

            }else if (response.data.message === "Expired link"){
                <Redirect to={'/auth/error'} />
            }
        })
    }
    if (redirect){
        return <Redirect to={'/auth/signin'} />
    }
    
    return (
        <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg shadow-lg p-6 m-4 bg-gray-100 border-0 md:max-w-sm md:mx-auto">
                <div>
                   <ForgotPwdForm />
                    
                </div>

            </div>
            </div>
        </div>
        </>
    )

}
export default ForgotPwd