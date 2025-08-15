
import './App.css'
import { useForm } from "react-hook-form"

function App() {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting},
  } = useForm();
  
async function onSubmit(data){

await new Promise((resolve) => setTimeout(resolve,5000));
  console.log("submitting...",data);
}
  return (
    <>
    <form   onSubmit={handleSubmit(onSubmit)}>
      <div>
      
  <label >First Name: </label>
  <input 
  className={errors.firstname?"input-error":""}
  {...register("firstname", { required: true,
    minLength:{value:3,message:"Min len should be 3" },
    maxLength:{value:6,message:"Max length almosT 6"} })} />
      </div>
   {errors.firstname && 
   <p className='error-msg'>{ errors.firstname.message}</p>}
    
      
<br />
       <div>
  <label >Middle Name: </label>
  <input className={errors.firstname?"input-error":""}  {...register("middlename", { required: true })} />
      </div>

<br />
       <div>
  <label >Last Name: </label>
  <input className={errors.firstname?"input-error":""}
   {...register("lastname",
     { required: true,
      pattern:{
        Value:/^[A-Zs-z]+$/i,
        message:"Last name is not as per the value"
      }
     })} />
     {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
      </div>
      <input type="submit" disabled= {isSubmitting} 
      value={isSubmitting?"Submitting":'submit'}
      />
     </form>
    </>
  )
}

export default App
