import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const {register,handleSubmit,formState: { errors },watch} = useForm({ mode: "onChange" });

  const password = watch("password") //input... password == {...re("password")}
  console.log("watching...",password)

  const validationSchema = {
    passwordValidator: {
      required: {
        value: true,
        message: "password is required*",
      },
    },
    confirmPasswordValidator:{
    required: {
        value: true,
        message: "confirm password is required*",
      },
      validate:(params)=>{
        return params == password || "confirm password not matched*"
      }
    }
  };
  const submitHanlder = (data) => {
    console.log(data);
  };

  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM WATCH DEMO</h1>
      <form onSubmit={handleSubmit(submitHanlder)}>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          ></input>
          {errors.password?.message}
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
          {errors.confirmPassword?.message}
        </div>
        <div>
            <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
