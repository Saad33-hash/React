import React from 'react'
import { useForm } from 'react-hook-form'
import './Reactform.css'

const Reactform = () => {

    const { register,
         handleSubmit,
          watch, 
          formState: { errors,isSubmitting} } = useForm();
async function onsubmit(data){
    await new Promise((resolve)=> setTimeout(resolve, 5000));
    console.log("Form Data Submitted:", data);
    alert("Form Submitted Successfully!");  
}

const password=watch("password","")
  
  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1 id='formhead'>Get in Touch</h1>
        <p id='formpara'>I would love to hear from you</p>
        <div className='name'>
            <label id='namelabel'>FullName</label>
            <input className='nameinput' type="text" {...register("FullName",{required:true,
                  minLength:{
                    value:3,
                    message:"Name should be greater than 3 words"
                },
                maxLength:{
                    value:10,
                    message:"Name exceding 10 words"
                },
         
                
            })} />
            {errors.FullName && <p id='namerror'>{errors.FullName.message}</p>}
        </div>
        
        <div className='name'>
            <label id='namelabel' >Email</label>
            <input className='nameinput' type="email" {...register("email",{required:true})}  />
            {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
            <label >Password</label>
            <input type="password" {...register("password",{required:true,
                 pattern: {
                value:/^[A-Za-z]+$/i,
                message:"Only letters are allowed"
                }
            })}  />
            {errors.password && <p id='namerror'>{errors.password.message}</p>}
        </div>

        <div>
            
            <label  className='name'>ConfirmPassword</label>
            <input type="password"  {...register("confirmpassword",
            {
                required:"please confirm your password",
                 pattern: {
                value:/^[A-Za-z]+$/i,
                message:"only letters are allowed"
                },
                validate:(value) => value === password || "password does not match"
            })}
             />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
            
        
        </div>

        <div>
         <input className='check' type="checkbox" {...register("checkbox",{
            required:"You must check the checkbox",

 } )}/>
         <p>I accept the terms</p>
        {errors.checkbox && <p>{errors.checkbox.message}</p>}
        
        </div>
      
       <div>
        <button id='btn' type="submit" disabled={isSubmitting}>
        {isSubmitting?'Submitting...':'Submit'}
           </button> 
            </div>
        
      </form>
    </div>
  )
}

export default Reactform
