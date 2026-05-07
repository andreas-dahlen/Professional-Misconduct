import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/products') {
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname])
}