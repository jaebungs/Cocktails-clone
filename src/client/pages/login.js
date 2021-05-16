import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SignInForm from '../components/LoginComponents/SignInForm';
import SignUpForm from '../components/LoginComponents/SignUpForm';
import { regularSignIn, createAccount } from '../redux/actions/accountAction';

const defaultInput = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
};

const login = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [input, setInput] = useState(defaultInput);

  // Validate Sign Up passwords.
  const passwordValidation = () => {
    if (input.password === input.confirmPassword) {
      return true;
    } else {
      alert("Passwords don't match");
      return false;
    }
  };

  //Toggle isSignUp state, so does components
  const handleSignUpOnClick = () => {
    setIsSignUp(!isSignUp);
    setInput(defaultInput);
  };

  // Handle form input change event.
  const handleInputOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle Sign In / Sign Up submit event.
  const handleSignSubmit = e => {
    e.preventDefault();
    // sign up or sign in api call.
    if (isSignUp && passwordValidation()) {
      dispatch(createAccount(input));
    }
    if (!isSignUp) {
      const data = { email: input.email, password: input.password };
      dispatch(regularSignIn(data));
    }
    setInput(defaultInput);
  };

  return (
    <div>
      {isSignUp ? (
        <SignUpForm
          handleSignUpOnClick={handleSignUpOnClick}
          handleInputOnChange={handleInputOnChange}
          handleSignSubmit={handleSignSubmit}
          input={input}
        />
      ) : (
        <SignInForm
          handleSignUpOnClick={handleSignUpOnClick}
          handleInputOnChange={handleInputOnChange}
          handleSignSubmit={handleSignSubmit}
          input={input}
        />
      )}
    </div>
  );
};

export default login;
