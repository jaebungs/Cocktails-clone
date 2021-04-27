import React from 'react';
import styled from '../styles/loginForm.module.scss';

const LoginForm = () => {
  return (
    <div>
      <form className={styled.formContainer}>
        <label>
          Email:
          <input className={styled.formInput} placeholder="Enter Email." />
        </label>
        <label>
          password:
          <input className={styled.formInput} placeholder="Enter Password." />
        </label>
        <div className={styled.buttonsContainer}>
          <button className={styled.formButton}>Login</button>
          <p>Sign in with</p>
          <button className={styled.formButton}>Google</button>
          <button className={styled.formButton}>Github</button>
          <button className={styled.formButton}>Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
