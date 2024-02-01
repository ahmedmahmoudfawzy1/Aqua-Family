import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./Page/Home/Home";
import Shop from "./Page/Shop/Shop";
import Contact from "./Page/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Page/Login/Login";
import Logout from "./Page/Logout/Logout";

const queryClient = new QueryClient();
const Routing = createBrowserRouter([ 
  { path: "", element: <Layout /> , children: [{
    path: "/" , element: <Home />},
    {path: "/shop" , element: <Shop />},
    {path: "/contact" , element: <Contact />},
    {path: "/login" , element: <Login />},
    {path: "/logout" , element: <Logout />},
  ]
},
]);
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routing}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
