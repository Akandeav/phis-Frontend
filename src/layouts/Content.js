import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar"
import Footersmall from "../components/Footers/FooterSmall";
import { Switch, Route } from "react-router";
import Appshome from "../views/landing/Appshome";
import { BiHomeCircle } from "react-icons/bi";
import Home from "../views/content/Home";
import Navbarlogin from "../components/Navbar/Navbarlogin";
import { useCookies } from "react-cookie";
import { isExpired, useJwt } from "react-jwt";


const Content = () => {
    const [isLoggedin, setLog] = useState(false);
    const [cookies] = useCookies('plt')
    useState( () => {
        if (cookies['plt']){
            setLog(true)
        }else{
            setLog(false)
        }
    })
    
   /* 
    useState( () => {
        (
          async () => {
              const response = await fetch('http://localhost:8000/auth/user', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include'
              });
    
              const content = await response.json();
              setLog(content.firstname);
          }
        )();
      });
      */
    return (
        <>
            <main>
                <section className="relative w-full h-full py-3 min-h-screen">
                   <Navbarlogin isLoggedin={isLoggedin} setLog={setLog}/>
                  <Switch>
                      <Route path="/phis" component={Home} />
                  </Switch>
                </section>
            </main>
        </>
    );

} 

export default Content