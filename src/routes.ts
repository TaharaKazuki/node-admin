import { Router } from 'express'
import { Register } from './controller/auth.controller'

export const routers = (router: Router) => {
  router.post('/api/register', Register)
}
