import React, { useState } from "react";

import Button from "./Button";
import InvalidCard from "../UI/InvalidCard.js";

import "./FormInput.css";

const FormInput = (props) => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error,setError] = useState("");

  const inputUsrNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    if(userName.trim().length === 0 || userAge.trim().length === 0){
      setError({
        title: "Invalid Input",
        invalidText:"Please enter valid input (non-empty input)" 
      });
      return;
    }
    if(userAge<=0){
      setError({
        title: "Invalid Age",
        invalidText:"Please enter valid Age (non-negative value)" 
      });
      return;
    }
    // console.log(userName);
    // console.log(userAge);

    const newUserData = {
      name: userName,
      age: +userAge,
    };

    props.getUserData(newUserData);

    // console.log(newUserData);

    setUsername("");
    setUserAge("");
  };

  const errorChangeHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <InvalidCard title={error.title} message={error.invalidText} onConfirm = {errorChangeHandler}></InvalidCard>}
      <form className="form-input" onSubmit={submitHandler}>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={inputUsrNameHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={userAge}
          onChange={inputAgeHandler}
        ></input>
        <Button type="submit"></Button>
      </form>
    </div>
  );
};

export default FormInput;
