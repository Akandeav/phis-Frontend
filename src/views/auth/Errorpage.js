import React from "react"
import { BiAlarmExclamation } from "react-icons/bi"
const Errorpage = () => {
    return(
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg shadow-lg p-6 m-4 bg-gray-100 border-0 md:max-w-sm md:mx-auto">
                        <div>
                            <BiAlarmExclamation className=""/>
                            <p>Invalid or broken Link</p>
                            <p>Go <a href="/">Home</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Errorpage