import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Aboutus } from "./components/aboutus";
//import { StudentInfo } from "./components/StudentInfo";
import StudentInfo from "./components/StudentInfo";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/about-us',
        element: <Aboutus/>
    },
    {
        path: '/student',
        element: <StudentInfo />
    }
];

export default AppRoutes;
