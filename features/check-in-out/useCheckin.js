import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkIn, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ active: true });
      toast.success(`Booking checked in successfully for ${data.id}`);
      navigate("/");
    },
    onError: () => {
      toast.error("Failed to check in booking");
    },
  });
  return { checkIn, isCheckingIn };
}
