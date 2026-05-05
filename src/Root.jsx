import Header from './components/base/Header';
import { Outlet, useNavigation } from 'react-router';
import LoadingPage from './pages/LoadingPage';
import Footer from './components/base/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import { usePopulateStore } from './hooks/usePopulateStore';

export default function Root() {
  usePopulateStore()
  const navigation = useNavigation()
  const displayLoading = navigation.state == 'loading'

  //TODO could possibly use selectively.. scroll wherever is reasonably...
  useScrollToTop()


  return (
    <div className='app-root'>

      <Header />

      {displayLoading ? <LoadingPage /> : <Outlet />}

      <Footer />

    </div>
  )
}