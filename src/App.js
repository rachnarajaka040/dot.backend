import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import CustomizedTables from "./scenes/dashboard/CustomizedTables";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import OrdersTable from "./scenes/dashboard/OrdersTable";
import Product from "./scenes/dashboard/Product";
import ProductForm from "./scenes/dashboard/ProductForm";
import Setting from "./scenes/dashboard/Setting";
import Login from "./scenes/dashboard/Login";
import Signup from "./scenes/dashboard/Signup";
import { useLocation } from "react-router-dom";
import Delivery from "./scenes/delivery-dashboard/Delivery";
import Seller from "./scenes/seller-dashboard/Seller";
import Accountent from "./scenes/accountent-dashboard/Accountent";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location=useLocation();
  const currentPath=location.pathname;
  console.log(currentPath);
 
 console.log(process.env.REACT_APP_GET_USER_DELETE);


  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {currentPath!=="/"?<Sidebar isSidebar={isSidebar}  />:null}
     
        
          <main className="content">

            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/orders" element={<OrdersTable />} />
              <Route path="/allusers" element={<CustomizedTables />} />
           
              <Route path="/product" element={<Product />} />
              <Route path="/productform" element={<ProductForm />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<Signup/>}/>

              <Route path="/accountent" element={<Accountent/>} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/seller" element={<Seller name="Drift Of Thread" admin=" Seller Admin" tittle="Dashboard" title2="Products" link1="Add Product" link2="View Product"/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;