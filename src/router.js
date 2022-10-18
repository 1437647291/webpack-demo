import AlgorithmOne from "./pages/AlgorithmOne/index";
import AlgorithmTwo from "./pages/AlgorithmTwo/index";

const routes = [
  // {
  //   path: '/',
  //   component: AlgorithmOne,
  //   exact: true
  // },
  { 
    path: '/algorithmOne',
    component: AlgorithmOne,
    name: '1'
  },
  {
    path: '/algorithmTwo',
    component: AlgorithmTwo,
    name: '2'
  },
  // {
  //     path: '/user',
  //     component: User,
  // },
  // {
  //     path: '*',
  //     component: NotFound
  // }
];

export default routes;
