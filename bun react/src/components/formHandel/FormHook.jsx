import React from 'react'
import { useForm } from "react-hook-form"


export default function FormHook() {
    const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => console.log(data)

    
      return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <input type='text' {...register('username', { required: {value:true, message: "username is required"} })} />

          {errors.username && <span>{errors.username.message}
          </span>}

          <br />
          
          <input type='password' {...register('password', 
            {
                required: {value: true, message: "password is required"},
                minLength: {value: 8, message: "password should be min of 8 caracters"},
                maxLength: {value: 16, message: "password should be max of 16 caracters"},

                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/, message: "passowrd must contain at least one special character, one upper case character, one number and one lowercase character"},
                
            }
        )} />
        {errors.password && <span>{errors.password.message}</span>}
          
          
    
          <input type="submit" />
        </form>
      )
  
}
