import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new Cabin
      </Button>
      {isOpenModal && <Modal />}
    </div>
  );
}

export default AddCabin;
