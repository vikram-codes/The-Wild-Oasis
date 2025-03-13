import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      navigate("/dashboard"), console.log(user);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Invalid Login credentials");
    },
  });
  return { login, isLoading };
}
