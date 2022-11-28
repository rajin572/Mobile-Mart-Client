import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser, updateProfileUser, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    
  const handleregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    console.log(name, email, password, role);
    createUser(email, password)
        .then(result => {
            form.reset()
            setError('')
            const profile = {
                displayName:name,
            }
            updateProfileUser(profile)
            .then(()=>{
                saveUserToDatabase(name, email, role);
                toast.success('Account Created Successfully!')
            })
            .catch(error =>{
                console.error(error);
            })
            navigate('/')
        })
        .catch(error =>
            {
                console.error(error)
                setError(error.message)
            })
  }

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () =>{
      googleLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        setError('')
        toast.success('Account Created Successfully!')
        const name = user.displayName;
        const email = user.email
        const role = "user"
        saveUserToDatabase(name, email, role)
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      })
    }


    const saveUserToDatabase = (name, email, role) => {
        const user = { name, email, role };
        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };

    return (
<div className='h-[800px] bg-base-200 flex justify-center items-center'>
            <div className='w-96 p-7  min-h-screen'>
                <h2 className='text-5xl text-center my-10 font-bold'>Sign Up</h2>
                <div className=' p-5 shadow-2xl bg-base-100 rounded-xl'>
                <form  onSubmit={handleregister}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered w-full max-w-xs required" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full max-w-xs required" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full max-w-xs required" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor="role"><span className="label-text">Choose a role:</span></label>
                        <select className="select w-full select-bordered" name="role" id="role">
                            <option value="Saler">Saler</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <p>{error}</p>
                    <button className="btn btn-primary w-full my-5">Login</button>
                </form>
                <p>Already have an account! <Link className=' text-blue-600' to="/login"> Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>

            </div>
        </div>
    );
};

export default SignUp;