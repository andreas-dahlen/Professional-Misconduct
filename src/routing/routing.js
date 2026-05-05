import FrontPage from '../pages/FrontPage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import Root from '../Root.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'
import AdminPage from '../pages/AdminPage.jsx'
import ItemPage from '../pages/ItemPage.jsx'

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
        //:name/:id' is called a slug
        path: '/products/:name/:id',
        Component: ItemPage
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
      },
      {
        path: '/admin',
        Component: AdminPage
      }
    ]
  }
]