import Header from './components/base/Header';
import { Outlet, useNavigation } from 'react-router';
import LoadingPage from './pages/LoadingPage';
import Footer from './components/base/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import { usePopulateStore } from './hooks/usePopulateStore';
import { Toaster } from 'sonner';
import './styles/index.css'

export default function Root() {
  usePopulateStore()
  const navigation = useNavigation()
  const displayLoading = navigation.state == 'loading'

  //TODO could possibly use selectively.. scroll wherever is reasonably...
  useScrollToTop()


  return (
    <>

      <Toaster
        toastOptions={{
          className: 'my-toast'
        }}
        position="top-center"        // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
        duration={Infinity}             // ms before auto-dismiss
        richColors                  // makes error red, success green etc
        closeButton
        expand
        // toasts expand by default instead of on hover
        visibleToasts={1}           // how many stack at once
        offset={300}                 // distance from edge in px
      />

      <div className='app-root'>

        <Header />

        {displayLoading ? <LoadingPage /> : <Outlet />}

        <Footer />

      </div>

    </>
  )
}