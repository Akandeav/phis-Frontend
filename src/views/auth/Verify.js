import axios from "axios"
import React from "react"
import { useState } from "react"
import { Redirect, useParams } from "react-router"
import logo from "../../assets/img/logo.png"
import { useJwt } from "react-jwt"
const Verify = () => {
    const [ redirect, setRedirect ] = useState(false)
    const [ expired, setExpired ] = useState(false)
    const [ errorredirect, setErrorRedirect ] = useState(false)
    const [error, setError ] = useState('')
    const {id} = useParams()
    const { isExpired } = useJwt(id)
    
    if(isExpired){
        return <Redirect to={'/expired'} />
    }
    if (id){
        axios.post('http://localhost:8000/auth/verify.email', {
            "B": id
        })
        .then(function(response){
            if (response.data.ok === true){
                setRedirect(true)
            } else if(response.data.ok === false){
                setExpired(true)
            }else if (!response.ok){
                setErrorRedirect(true)

            }
        })
    }
    if (redirect){
        return <Redirect to={'/auth/signin'} />
    }
    if (errorredirect){
        return <Redirect to={'/servererror'} />
    }
    if (expired){
        return <Redirect to={'/expired'} />
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
                    <p>Please wait while your email is Verified</p>
                    
                </div>

            </div>
            </div>
        </div>
        </>
    )

}
export default Verify