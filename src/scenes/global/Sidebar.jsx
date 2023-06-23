import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";

import Person4SharpIcon from "@mui/icons-material/Person4Sharp";
import RequestQuoteSharpIcon from "@mui/icons-material/RequestQuoteSharp";
import CategoryIcon from '@material-ui/icons/Category';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
      display="flex"
      flexWrap="wrap"
    >
      <ProSidebar collapsed={isCollapsed}>
        <SidebarHeader>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Drift Of Thread
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </SidebarHeader>

        <Menu iconShape="square">
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Dummy Data
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Product Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <SubMenu
              title="Category"
              icon={<CategoryIcon />}
              defaultOpen={false}
            >
            <MenuItem>
              <Link to="/orders">Pent</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/pending">Sarees</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/delivered">T-shirts</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu
            title="Orders"
            icon={<ShoppingCartIcon />}
            defaultOpen={false}
          >
            <MenuItem>
              <Link to="/orders">All Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/pending">Pending Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/delivered">Delivered Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/delivered">Canceled Orders</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu
            title="Products"
            icon={<CategorySharpIcon />}
            defaultOpen={false}
          >
            <MenuItem>
              <Link to="/productform">Add Product</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/product">View Product</Link>
            </MenuItem>
            
          </SubMenu>

          {/* <SubMenu
            title="Sellers"
            icon={<StorefrontSharpIcon />}
            defaultOpen={false}
          >
            <MenuItem>
              <Link to="/orders">All Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/pending">Pending Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/delivered">Delivered Orders</Link>
            </MenuItem>
          </SubMenu> */}

          {/* <SubMenu
            title="Delivery Boys"
            icon={<PersonPinSharpIcon />}
            defaultOpen={false}
          >
            <MenuItem>
              <Link to="/orders">All Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/pending">Pending Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/delivered">Delivered Orders</Link>
            </MenuItem>
          </SubMenu> */}

          <SubMenu
            title="Customer"
            icon={<Person4SharpIcon />}
            defaultOpen={false}
          >
            <MenuItem>
              <Link to="/orders">All Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/pending">Pending Orders</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orders/delivered">Delivered Orders</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu
            title="Payment"
            icon={<RequestQuoteSharpIcon />}
            defaultOpen={false}
          >
            <MenuItem>
              <Link to="/paid">Paid</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/COD">COD</Link>
            </MenuItem>
            
          </SubMenu>
        </Box>
      </Menu>
    </ProSidebar>
    </Box >
  );
};

export default Sidebar;
