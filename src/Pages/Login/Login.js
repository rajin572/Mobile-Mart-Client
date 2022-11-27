import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const {userLogin, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const HandleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        userLogin(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            form.reset()
            navigate(from, {replace: true})
            setError('')
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        }
        )
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        googleLogin(googleProvider)
        .then(result =>{
          const user = result.user
          console.log(user);
          navigate(from, {replace: true})
          setError('')
        })
        .catch(error => {
          console.log(error);
        })
      }


    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shadow-2xl bg-base-100 p-10">
      <form  onSubmit={HandleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered required:" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="text" placeholder="password" className="input input-bordered required" />
        </div>
        <p className=' text-red-600'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        <p>Haven't any account <Link to='/signup' className=' text-blue-600'>Create an account</Link></p>
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
    </div>
  </div>
</div>
    );
};

export default Login;