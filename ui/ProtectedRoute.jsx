function ProtectedRoute({ children }) {
  //1. Load the authenticated user

  //2. While loading, show a loading spinner

  //3. If the user is not authenticated, redirect to the login page

  //4. If the user is authenticated, render the app
  return children;
}

export default ProtectedRoute;
