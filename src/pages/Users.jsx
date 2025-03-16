import Heading from "../ui/Heading";
import SignuForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignuForm />
    </>
  );
}

export default NewUsers;
