import React from 'react'

const SignUp = () => {
  return (
    <div className='Login'>
      <div className="page">
        <div className="card_2">
            <div className="head">
                Sign Up
            </div>
            <div className="usernamepart">
                <p>User Name</p>
                <input type="text" name="" placeholder='Type your username' id="" className='username' />
            </div>
            <div className="emailpart">
                <p>Email Address</p>
                <input type="text" name="" placeholder='Type your email address' id="" className='email' />
            </div>
            {/* <br /> */}
            <div className="passwordpart">
                <p>Password</p>
                <input type="password" name="" id="" placeholder='Type your password' className='password' />
            </div>
            {/* <br /> */}
            <div className="confirmpasswordpart">
                <p>Confirm your Password</p>
                <input type="password" name="" id="" placeholder='Confirm your password' className='confirm_password' />
            </div>
            {/* <br /> */}
            <div className="btn">SIGN UP</div>
            {/* <br /> */}
            {/* <div className="text">
                <p className='elss_text'>Or sign up using</p>
            </div> */}
            {/* <div className="else">
                <a href="http://">Sign Up</a>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default SignUp
