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
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">

            <Routes>
              <Route path="/" element={<Dashboard />} />
         
              <Route path="/orders" element={<OrdersTable/>} />

              <Route path="/allusers" element={<CustomizedTables />} />
               <Route path="/product" element={<Product/>} />
               <Route path="/productform" element={<ProductForm/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
