import BookingDetail from "../features/bookings/BookingDetail";
import { useBooking } from "../features/bookings/useBooking";

function Booking() {
  const { booking, isLoading } = useBooking();
  return <BookingDetail />;
}

export default Booking;
