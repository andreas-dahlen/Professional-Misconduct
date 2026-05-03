import FrontPage from '../pages/FrontPage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import Root from '../Root.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/loginPage.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'

export const routing = [
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: FrontPage },
      {
        path: '/products',
        Component: ProductPage
      },
      {
        path: '/cart',
        Component: CartPage
      },
      {
        path: '/login',
        Component: LoginPage

      },
      {
        path: '/loading',
        Component: LoadingPage

      }
    ]
  }
]