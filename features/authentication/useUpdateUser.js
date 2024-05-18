import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: ({ user }) => {
      queryClient.setQueriesData(["user"], user);
      toast.success("User successfully updated!");
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
