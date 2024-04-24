import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import { useCheckin } from "./useCheckin";
import { formatCurrency } from "../../utils/helpers";
import { useSettings } from "../settings/useSettings";
import Checkin from "../../pages/Checkin";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { checkIn, isCheckingIn } = useCheckin();
  const { settings, isLoading: isSetting } = useSettings();
  console.log(booking);
  // useEffect(() => setConfirmPaid(booking?.isPaid ?? false), []);
  useEffect(() => {
    booking?.isPaid ?? setConfirmPaid(true);
  }, [booking?.isPaid]);

  const moveBack = useMoveBack();
  if (isLoading || isSetting) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
  const optionalBreakfast = settings.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfast,
          totalPrice: totalPrice + optionalBreakfast,
        },
      });
    } else {
      checkIn({ bookingId });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            disabled={isCheckingIn}
            id="breakfast"
            onChange={() => {
              setAddBreakfast((set) => !set);
              setConfirmPaid(false);
            }}
          >
            Add breakfast for {numGuests} guests for {numNights} nights for{" "}
            {formatCurrency(optionalBreakfast)}
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          disabled={confirmPaid || isCheckingIn}
          id="confirmed"
          onChange={() => setConfirmPaid((set) => !set)}
        >
          I confirm that {guests.fullName} has paid the full amount of
          {`${
            addBreakfast
              ? formatCurrency(totalPrice + optionalBreakfast)
              : formatCurrency(totalPrice)
          } `}{" "}
          for the booking
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
