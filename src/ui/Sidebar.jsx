import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useCabin } from "../features/cabins/useCabin";
import { useSettings } from "../features/settings/useSettings";
import { useBookings } from "../features/bookings/useBookings";
import Uploader from "../data/Uploader";

const StyledAside = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { cabins } = useCabin();
  const { settings } = useSettings();
  const { bookings } = useBookings();

  return (
    <StyledAside>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledAside>
  );
}

export default Sidebar;
