import axios from "axios"
import React from "react"
import { useState } from "react"
import { Redirect, useParams } from "react-router"
import logo from "../../assets/img/logo.png"

const Signout= () => {
    const [ redirect, setRedirect ] = useState(false)
    const [ serror, setServer ] = useState(false)
    if (true){
        axios.post('http://localhost:8000/auth/logout')
        .then(function(response){
            if (response.data.message === "Logged out!"){
                setRedirect(true)
            } else if(!response.ok){
                setServer(true)
            }
        })
    }
    if (redirect){
        return <Redirect to={'/'} />
    }
    if (serror){
        return <Redirect to={'/servererror'} />
    }
    
    return (
        <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg shadow-lg p-6 m-4 bg-gray-100 border-0 md:max-w-sm md:mx-auto">
                <div>
                    <a
                        href="/"
                        className="h-15 w-full flex justify-center items-center py-2 px-4 "
                    >
                        <img src={logo} alt="" />        
                    </a>
                    <p>Logged out!</p>
                    
                </div>

            </div>
            </div>
        </div>
        </>
    )

}
export default Signout