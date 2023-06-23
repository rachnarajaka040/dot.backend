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

              <Route path="/orders" element={<OrdersTable />} />

              <Route path="/allusers" element={<CustomizedTables />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productform" element={<ProductForm />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
