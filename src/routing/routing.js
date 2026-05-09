import FrontPage from '../pages/FrontPage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import Root from '../Root.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import ProductItemPage from '../pages/ProductItemPage.jsx'
import CreateUserPage from '../pages/CreateUserPage.jsx'
import AdminItemPage from '../pages/AdminItemPage.jsx'
import AdminEditPage from '../pages/AdminEditPage.jsx'
import { requireAuth } from '../data/requireAuth.js'

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
        Component: ProductItemPage
      },
      {
        path: '/products/:name/:id/admin',
        loader: requireAuth,
        Component: AdminItemPage
      },
      {
        path: '/products/:name/:id/admin/edit',
        loader: requireAuth,
        Component: AdminEditPage
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
        path: '/create',
        Component: CreateUserPage
      }
    ]
  }
]