import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";

export function useBookings() {
  const queryClient = useQueryClient();
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

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query
  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", { filter, sortBy, page }],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-Fetching
  const pageCount = Math.ceil(bookings?.count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery(["bookings", { filter, sortBy, page: page + 1 }]);
  if (page > 1)
    queryClient.prefetchQuery(["bookings", { filter, sortBy, page: page - 1 }]);

  return { bookings, error, isLoading };
}
