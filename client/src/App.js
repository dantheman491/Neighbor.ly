import "./App.css";
import Home from "./screens/Home/Home";
import { Route, Switch } from "react-router-dom";
import { verifyUser } from "./services/users";
import { useState, useEffect } from "react";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import Listings from "./screens/Listings/Listings";
import ListingCreate from "./screens/ListingCreate/ListingCreate";
import ListingEdit from "./screens/ListingEdit/ListingEdit";
import ListingDetail from "./screens/ListingDetail/ListingDetail";
import About from "./screens/About/About";
import UserListings from "./screens/UserListings/UserListings";
import Buy from "./screens/Buy/Buy";

const App = () => {
  const [user, setUser] = useState(null);
  const clearUser = () => setUser(null);
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
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/listings">
          <Listings user={user} />
        </Route>
        <Route exact path="/add-listing">
          <ListingCreate user={user} />
        </Route>
        <Route exact path="/edit-listing/:id">
          <ListingEdit user={user} />
        </Route>
        <Route exact path="/listing/:id">
          <ListingDetail user={user} />
        </Route>
        <Route exact path="/about">
          <About user={user} />
        </Route>
        <Route exact path="/buy">
          <Buy user={user} />
        </Route>
        <Route exact path="/listings/user-listings">
          <UserListings user={user} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
