import Layout from "../../components/shared/Layout/Layout";
import "./SignIn.css";
import React, { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
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
          Sign In
        </button>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div className="background">
        <div className="page-container">
          <h3>Sign In</h3>
          <div className="form-container1">
            <form onSubmit={onSignIn}>
              <label className="label-sign">Username</label>
              <input
                className="sign-in-input"
                required
                type="text"
                name="username"
                value={username}
                placeholder="Enter Username"
                onChange={handleChange}
                autoFocus
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
              {renderError()}
            </form>
            <div className="signup">
              <NavLink to="/sign-up" className="register">
                <h4>Dont have an Account? Register</h4>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
