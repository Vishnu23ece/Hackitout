import React from 'react'

const Login = () => {
  return (
    <div className='Login'>
        <div className="page">
        <div className="card">
            <div className="head">
                Login
            </div>
            <div className="usernamepart">
                <p>Email Address</p>
                <input type="text" name="" placeholder='Type your email address' id="" className='username' />
            </div>
            <br />
            <div className="passwordpart">
                <p>Password</p>
                <input type="password" name="" id="" placeholder='Type your password' className='password' />
            </div>
            {/* <br /> */}
            <div className="btn">LOGIN</div>
            <br />
            <div className="text">
                <p className='elss_text'>Or sign up using</p>
            </div>
            <div className="else">
                <a href="http://">Sign Up</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
