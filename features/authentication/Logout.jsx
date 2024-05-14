import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  function handleClick(e) {
    e.preventDefault();
    logout();
  }

  return (
    <ButtonIcon onClick={handleClick} disabled={isLoading}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
