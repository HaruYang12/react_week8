import Layout from "../Layout"
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Detail from "../Pages/Detail";

const routes = [
    {
        path: '/',
        element:<Layout/>,
        children: [
            {
                path: '',
                element:<Home/>
            },
            {
                path: 'products',
                element:<Products/>
            },
            {
                path: 'product/:id',
                element:<Detail/>
            },
        ]
    }
]

export default routes;