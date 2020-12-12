import React from 'react';
import './home.page.css';

function Login() {
    return (
      <div className="row"> 
            <div className="Login">
                <h1 className="h1">This is Homepage</h1>
                <section>
                    <p>
                    <h2 className="h2">Please login here!</h2>
                    <div>
                        <form className="form">
                            <fieldset>
                                <br></br>User Name:
                                <p>
                                    <input type="text"></input>
                                </p>
                                <br></br>User Password:
                                <p>
                                    <input type="text"></input>
                                </p>
                                <p>
                                    <input type="submit"></input>
                                </p>
                                <br></br>Forget Password?
                                <p>
                                    <input type="submit"></input>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                    </p>
                </section>
            </div>
      </div>
    );
  }
  
export default Login;
