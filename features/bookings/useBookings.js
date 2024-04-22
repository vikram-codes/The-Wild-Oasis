import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");

  // Filtering
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };

  // Sorting
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", { filter, sortBy }],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  //   console.log(bookings);
  return { bookings, error, isLoading };
}
