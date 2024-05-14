import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //2. If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading]);

  //3. While loading, show a loading spinner
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  //4. If the user is authenticated, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
