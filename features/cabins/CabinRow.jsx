import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import { HiX } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useDeleteCabin } from "./useDeleteCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  const { createCabin, isCreating } = useCreateCabin();
  // });
  const { isDeleting, deleteCabin } = useDeleteCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>fits upto {maxCapacity} person</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? <Discount>{formatCurrency(discount)}</Discount> : "--"}
        <div>
          <Button variation="secondary" size="small" onClick={handleDuplicate}>
            <HiSquare2Stack />
          </Button>
          <Button
            variation="secondary"
            size="small"
            onClick={() => setShowForm((show) => !show)}
          >
            {showForm ? <HiX /> : <HiPencil />}
          </Button>
          <Button
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            variation="secondary"
            size="small"
          >
            <HiTrash />
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm label="Edit" cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
