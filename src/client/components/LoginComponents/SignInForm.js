import React from 'react';
import styled from './SignInForm.module.scss';

const SignInForm = ({ input, handleSignUpOnClick, handleSignSubmit, handleInputOnChange }) => {
  return (
    <div>
      <form className={styled.formContainer} onSubmit={handleSignSubmit}>
        <label>
          Email:
          <input
            type="email"
            className={styled.formInput}
            value={input.email}
            onChange={handleInputOnChange}
            name="email"
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
            onChange={handleInputOnChange}
            name="password"
            placeholder="Enter Password."
            required
          />
        </label>
        <div className={styled.buttonsContainer}>
          <button className={styled.formButton}>Sign in</button>
        </div>
      </form>
      <p>Don&apos;t have an account yet?</p>
      <button onClick={handleSignUpOnClick}>Click here to Sign Up</button>
      <div className={styled.buttonsContainer}>
        <p>Sign in with:</p>
        <button className={styled.formButton}>Google</button>
        <button className={styled.formButton}>Github</button>
        <button className={styled.formButton}>Facebook</button>
      </div>
    </div>
  );
};

export default SignInForm;
