import React from 'react'
import { Link } from 'react-router-dom'
// import Signup from './Signup'
import { useForm } from "react-hook-form";

function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);
  return (
    <div>
     <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/signup' className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
    
    <h3 className="text-lg font-bold">Login!</h3>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your email ! ' className='px-2 py-1 border rounded-md outline-none w-80' {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })} />
        <br />
         {errors.email &&  <span className='text-sm text-red-500' > This field is required </span>}
    </div>


    {/* password  */}
    <div className='mt-4 space-y-2 '>
      <span>Password</span>
      <br />
      <input type="email" placeholder='Enter your password ! ' className='px-2 py-1 border rounded-md outline-none w-80'  {...register("password", {
          validate: value => value !== "admin" || "Nice try!"
        })}/>
        {errors.password && errors.password.message}
    </div>

    
    {/* button  */}
    <div className='flex justify-around mt-4'>
      <button type='submit' className='px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700'>Login</button>
      <p>Not registerd? {" "}
        <Link to='/signup' className='text-blue-500 underline cursor-pointer'>Signup</Link>{" "}
         </p>
    </div>
    </form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login