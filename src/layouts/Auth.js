import React from "react";
import { Switch, Route, Redirect } from "react-router";

//components

import FooterSmall from "../components/Footers/FooterSmall";
import EnterEmail from "../views/auth/EnterEmail";

import ForgotPwd from "../views/auth/ForgotPwd";

//views

import Signin from "../views/auth/Signin";
import Signup from "../views/auth/Signup";
import Verify from "../views/auth/Verify";
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
                        <Route path="/auth/signin" exact component={Signin}/>
                        <Route path="/auth/signup"  exact component={Signup} />
                        <Route path="/auth/verify/:id"  exact component={Verify} />
                        <Route path="/auth/enteremail" exact component={EnterEmail} />
                        <Route path="/auth/forgotpwd" exact component={ForgotPwd} />
                        {/*<Redirect from="/auth" to="/auth/signin" /> */}
                    </Switch>
                    <FooterSmall  />
                </section>
            </main>
        </>
    )
}