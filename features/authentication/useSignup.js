import { useMutation } from "@tanstack/react-query";
import { signup as signupAPi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPi,
    onSuccess: (user) => {
      toast.success(
        "User created successfully \t Please verify the new user email address"
      );
      console.log("useSignup", user);
    },
  });
  return { signup, isLoading };
}
