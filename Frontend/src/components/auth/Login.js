import React, { useState } from "react";

const Login = () => {
  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormUser({ ...formUser, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formUser);
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <h2>Login Yourself</h2>
      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          onChange={onChange}
          value={formUser.email}
          name='email'
          placeholder='Enter Email'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          id='password'
          onChange={onChange}
          value={formUser.password}
          name='password'
          placeholder='Enter Password'
        />
      </div>
      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;