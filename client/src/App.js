import "./App.css";
import Home from "./screens/Home/Home";
import { Route, Switch } from "react-router-dom";
import { verifyUser } from "./services/users";
import { useState, useEffect } from "react";
import SignIn from "./screens/SignIn/SignIn";
// import SignOut from "./screens/SignOut/SignOut";
// import SignUp from "./screens/SignUp/SignUp";

const App = () => {
  const [user, setUser] = useState(null);
  // const clearUser = () => setUser(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        {/*
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route> */}
      </Switch>
    </div>
  );
};
export default App;
