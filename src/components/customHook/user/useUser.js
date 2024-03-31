import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userSetData } from "../../../redux/auth/userReducer";

function useUser() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userSetData({ isAuthenticated, isLoading, user }));
    console.log("user: ", user);
  }, [dispatch, isAuthenticated, isLoading, user]);
  return { isAuthenticated, isLoading };
}

export default useUser;
