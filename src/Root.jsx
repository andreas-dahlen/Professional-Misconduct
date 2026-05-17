import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import useScrollToTop from './hooks/utils/useScrollToTop';
import { usePopulateStore } from './hooks/storeHooks/usePopulateStore';
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import './styles/index.css'

export default function Root() {
  usePopulateStore()
  useScrollToTop()

  return (
    <>

      <Toaster
        position="top-center"
        duration={Infinity}
        richColors
        closeButton
        visibleToasts={1}
        offset={300}
      />

      <div style={{ minHeight: '100svh' }}>

        <Header />

        <Outlet />

        <Footer />

      </div>

    </>
  )
}