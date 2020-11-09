import { Details, Money, Success } from 'pages'

export const routes = [
  {
    path: '/',
    component: Money,
    exact: true,
  },
  {
    path: '/details',
    component: Details,
    exact: true,
  },
  {
    path: '/success',
    component: Success,
    exact: true,
  },
]
