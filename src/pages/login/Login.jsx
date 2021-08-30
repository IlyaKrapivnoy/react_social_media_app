import './login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Social</h3>
                    <span className='loginDescr'>
                        Connect with friend and world around you
                    </span>
                </div>
                <div className='loginRight'>
                    <div className='loginBox'>
                        <input placeholder='Email' className='loginInput' />
                        <input placeholder='Password' className='loginInput' />
                        <button className='loginButton'>Log in</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className='loginRegisterButton'>
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
