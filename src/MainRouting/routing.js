import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginComp from '../layout/LoginComp'
import HomeComp from '../component/HomeComp'
import AboutComp from '../component/AboutComp'
import ProductComp from '../component/ProductComp'
import ContactComp from '../component/ContactComp'
import MainDashboardComp from '../layout/MainDashboardComp'

const routing = createBrowserRouter([
    // {path:"", element:<LoginComp></LoginComp>},

    {path:"", element:<MainDashboardComp/>, children:[
        {path:"", element:<HomeComp/>},
        {path:"about", element:<AboutComp/>},
        {path:"home", element:<HomeComp/>},
        {path:"products", element:<ProductComp/>},
        {path:"contact", element:<ContactComp/>}
    ]},

    // {path:"", element:<HomeComp/>},
    // {path:"about", element:<AboutComp/>},
    // {path:"home", element:<HomeComp/>},
    // {path:"products", element:<ProductComp/>},
    // {path:"contact", element:<ContactComp/>}
    
    
])
export default routing
