import { useEffect, useRef } from "react";

function useOutsideClick(handler, listeningEvent = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listeningEvent);
      return () =>
        document.removeEventListener("click", handleClick, listeningEvent);
    },
    [handler, listeningEvent]
  );

  return ref;
}

export default useOutsideClick;
