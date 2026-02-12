import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    //errors -->{}
    console.log("errors...",errors) //{}

    const validationSchema = {
        
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"min age should be 18*"
            },
            max:{
                value:60,
                message:"max age should be 60*"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"address is required*"
            },
            minLength:{
                value:5,
                message:"min 5 char is required"
            },
            maxLength:{
                value:20,
                message:"max 20 char is accepted****"
            }
        }


    }




    const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label>ADD</label>
                <input type='text' {...register("add",validationSchema.addressValidator)}></input>
                {errors.add?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>

    </div>
  )
}
