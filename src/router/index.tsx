import { RouteObject } from "react-router-dom";
import Index from '../pages/index'
import Home from '../pages/home'

const Router: RouteObject[] = [
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/home',
        element: <Home />
    }
]

export default Router