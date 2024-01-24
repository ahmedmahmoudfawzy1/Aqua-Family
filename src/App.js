import "./App.css";

import { Route, Routes } from "react-router-dom";
import { QueryClientProvider , QueryClient } from "react-query";
import Home from "./Page/Home/Home";
import Shop from "./Page/Shop/Shop";
import Contact from "./Page/Contact/Contact";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
