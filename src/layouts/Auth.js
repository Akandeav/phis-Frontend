import React from "react";
import { Switch, Route, Redirect } from "react-router";

//components

import FooterSmall from "../components/Footers/FooterSmall";
import EnterEmail from "../views/auth/EnterEmail";

import ForgotPwd from "../views/auth/ForgotPwd";
import EmailLink from "../views/auth/GenrateEmailVerLink";

//views

import Signin from "../views/auth/Signin";
import Signout from "../views/auth/Signout";
import Signup from "../views/auth/Signup";
import Verify from "../views/auth/Verify";
import Errorpage from "./Errorpage";
export default function Auth(){
    return (
        <>
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full md:h-full"
                        style={{
                            backgroundImage:
                                "url(" + require("../assets/img/bg-6.png").default + ")",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                            }}
                    ></div>
                    <Switch>
                        <Route path="/auth/signin"  component={Signin}/>
                        <Route path="/auth/signup"  exact component={Signup} />
                        <Route path="/auth/verify/:id"  exact component={Verify} />
                        <Route path="/auth/enteremail"  component={EnterEmail} />
                        <Route path="/auth/veremail"  component={EmailLink} />
                        <Route path="/auth/forgotpwd/:id"  component={ForgotPwd} />
                        <Redirect from='*' to='/error' />
                       
                        {/*<Redirect from="/auth" to="/auth/signin" /> */}
                    </Switch>
                    <FooterSmall  />
                </section>
            </main>
        </>
    )
}