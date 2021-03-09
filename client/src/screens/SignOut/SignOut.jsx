import { useEffect } from "react";
// import { signOut } from "../../services/user";
import { useHistory } from "react-router-dom";

const SignOut = (props) => {
  const { clearUser, user } = props;
  const history = useHistory();

  useEffect(() => {
    signOut(user)
      .then(() => clearUser())
      .finally(() => history.push("/"));
  }, [history, clearUser, user]);

  return "";
};

export default SignOut;
