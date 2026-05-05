import { useEffect } from "react";
import { useLocation } from "react-router";
// import { useNavigation } from "react-router";

export default function useScrollToTop() {
  const location = useLocation();
  // const navigation = useNavigation();

  // // scroll on navigation start
  // useEffect(() => {
  //   if (navigation.state === "loading") {
  //     window.scrollTo(0, 0)
  //   }
  // }, [navigation.state])

  // // for safety reasons: also scroll when route changes
  // useEffect(() => {
  //   if (location.pathname == './products') return
  //   window.scrollTo(0, 0);
  // }, [location.pathname])

  useEffect(() => {
    // if (location.pathname === '/products') {
    //   console.log('skipping scroll')
    //   return
    // }
    console.log('scrolling to top')
    window.scrollTo(0, 0)
  }, [location.pathname])
}