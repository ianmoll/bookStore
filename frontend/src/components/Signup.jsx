import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Signup() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);
  return (
    <>
    <div className='flex items-center justify-center h-screen dark:bg-slate-900 dark:text-white'>
      <div id="my_modal_3" className="w-[600px]">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
    
    <h3 className="text-lg font-bold ">Signup!</h3>
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" placeholder='Enter your name ! ' className='px-2 py-1 border rounded-md outline-none w-80' 
      {...register("username", {
        required: "Required",
        
      })}
      />
      <br />
      {errors.username &&  <span className='text-sm text-red-500' > This field is required </span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter your email ! ' className='px-2 py-1 border rounded-md outline-none w-80'  {...register("email", {
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
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="email" placeholder='Enter your password ! ' className='px-2 py-1 border rounded-md outline-none w-80'  {...register("password", {
          validate: value => value !== "admin" || "Nice try!"
        })}/>
        {errors.password && errors.password.message}
    </div>

    
    {/* button  */}
    <div className='flex justify-around mt-4'>
      <button className='px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700'>Signup</button>
      <p>Have account ? {" "}
        <Link to='/' className='text-blue-500 underline cursor-pointer'>Login</Link>{" "}
         </p>
    </div>
    </form>
  </div>
 
</div>
    </div>
    </>
    
  )
}

export default Signup