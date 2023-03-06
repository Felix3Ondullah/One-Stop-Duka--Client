import React from "react";

function About(){
    return(
        <div>
             <h1 >One Stop Duka <br /><span >You need it, we got it!</span></h1>
                <h2 >This is a shop straight out of convenience heaven. <br/> Get all the products you need delivered to your door step</h2>
            <div >
            

                <p >Sign up for our newsletter</p>
            <div >
                <form >
                    <div >
                    <div>
                        <input type="text"  placeholder="First name">
                        </input>
                    </div>
                    <div >
                        <input type="text"  placeholder="Last name">
                        </input>
                    </div>
                    </div>
                    <div >
                    <input type="email" 
                        placeholder="Email address">
                        </input>
                    </div>
                    <div >
                    <input type="password" 
                        placeholder="Password">
                        </input>
                    </div>
                    <div >
                    <input type="checkbox" checked>
                        </input>
                    <label >Subscribe to our newsletter</label>
                    </div>
                    <button type="submit" >Sign up</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default About;