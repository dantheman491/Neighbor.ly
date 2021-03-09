import React, { useState } from "react";
import "./SignUp.css";
// import { signUp, signIn } from "../../services/user";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button id="sign-in-button" type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button id="sign-in-button" type="submit">
          Sign Up
        </button>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout>
      <div className="background">
        <div className="form-container">
          <h3>Sign Up</h3>
          <form onSubmit={onSignUp}>
            <label className="label-sign">Username</label>
            <input
              className="sign-in-input"
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={handleChange}
              autoFocus
            />
            <label className="label-sign">Email address</label>
            <input
              className="sign-in-input"
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            <label className="label-sign">Password</label>
            <input
              className="sign-in-input"
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <label className="label-sign">Password Confirmation</label>
            <input
              className="sign-in-input"
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
