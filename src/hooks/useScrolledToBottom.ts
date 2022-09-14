import { useEffect } from "react";

export const useScrolledToBottom = (triggerBottomEvent: () => void) => {
  useEffect(() => {
    const loadMoreOnBottom = () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        triggerBottomEvent();
      }
    };
    window.addEventListener("scroll", loadMoreOnBottom);
    return () => {
      window.removeEventListener("scroll", loadMoreOnBottom);
    };
  }, []);
};
