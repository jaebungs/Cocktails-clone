import React from 'react';
import styled from './SignInForm.module.scss';

const SignUpForm = ({ input, handleSignUpOnClick, handleSignSubmit, handleInputOnChange }) => {
  return (
    <div>
      <form className={styled.formContainer} onSubmit={handleSignSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            value={input.firsName}
            placeholder="Enter first name."
            onChange={handleInputOnChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={input.lastName}
            placeholder="Enter last name."
            onChange={handleInputOnChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            className={styled.formInput}
            value={input.email}
            name="email"
            onChange={handleInputOnChange}
            placeholder="Enter Email."
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            className={styled.formInput}
            value={input.password}
            name="password"
            onChange={handleInputOnChange}
            placeholder="Enter Password."
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            className={styled.formInput}
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleInputOnChange}
            placeholder="Confirm Password."
            required
          />
        </label>

        <button className={styled.formButton}>Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <button onClick={handleSignUpOnClick}>Click here to Sign in</button>
      <div className={styled.buttonsContainer}>
        <p>Sign Up with:</p>
        <button className={styled.formButton}>Google</button>
        <button className={styled.formButton}>Github</button>
        <button className={styled.formButton}>Facebook</button>
      </div>
    </div>
  );
};

export default SignUpForm;
