 import PastesPage from '../pages/PastesPage'
// import Pastes from '../components/Pastes'
import Home from '../Home'
import ViewPage from '../pages/ViewPage'
 
 
 export const RouteConstant =[
{
    id:1,
path:'/',
element: Home,
},
{
    id:2,
path:'/pastes',
element: PastesPage,
},
{
    id:2,
path:'/pastes/:id',
element: ViewPage,
},
// {
//     id:2,
// path:'/pastes/:pasteId',
// element: Pastes,
// },



]