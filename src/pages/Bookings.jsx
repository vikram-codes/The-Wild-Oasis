import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Row from "../ui/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
