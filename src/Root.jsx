import Header from './components/base/Header';
import { Outlet } from 'react-router';
import Footer from './components/base/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import { usePopulateStore } from './hooks/storeHooks/usePopulateStore';
import { Toaster } from 'sonner';
import './styles/index.css'

export default function Root() {
  usePopulateStore()
  useScrollToTop()

  return (
    <>

      <Toaster
        // toastOptions={{
        //   className: 'my-toast'
        // }}
        position="top-center"
        duration={Infinity}
        richColors
        closeButton
        expand
        visibleToasts={1}
        offset={300}
      />

      <div style={{ minHeight: '100svh' }}>

        <Header />

        {/* {state === 'loading' ? <LoadingPage /> : <Outlet />} */}
        <Outlet />
        <Footer />

      </div>

    </>
  )
}