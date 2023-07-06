import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TrackOrderIcon from '@material-ui/icons/TrackChanges';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import StatBox from "../../components/StatBox";
import Topbar from "../global/Topbar";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SalesChart from "./linechart/SalesChart";
import { countUsers, countOrder, countProduct } from "../../apis/users.js";
import AdminLayout from "../Layout/AdminLayout";
import middleware from "../../apis/middleware";


const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [users, setUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  // useEffect(() => middleware("admin", navigate), [])

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_GET_USER_COUNT}`);
        if (response.status === 200) {
          const data = await response.json();
          setIsLoading(false)
          setUsers(data.numbers);
        }

      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // useEffect(() => {

  //   countOrder(setOrderCount);

  // }, [])

  // useEffect(()=>{
  //   countUsers(setUsers);
  //  },[])

  // useEffect(() => {
  //   countProduct(setProductCount);
  // }, [])

  useEffect(() => {

    const orderUsers = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/v1/orders/count");
         if (response.status === 200) {
          const data = await response.json();
          setIsLoading(false)
          setOrderCount(data.numbers);
          console.log(data);
         }

      } catch (error) {
         console.error('Failed to fetch users:', error);
       } finally {
         setIsLoading(false);
      }
    };

    orderUsers();
  }, []);




  useEffect(() => {

    const productUsers = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/v1/products/count");
         if (response.status === 200) {
          const data = await response.json();
          setIsLoading(false)
          setProductCount(data.numbers);
         }

      } catch (error) {
         console.error('Failed to fetch users:', error);
       } finally {
         setIsLoading(false);
      }
    };

    productUsers();
  }, []);

  const productSalesData = [
    { name: "Jan", sales: 120 },
    { name: "Feb", sales: 250 },
    { name: "Mar", sales: 150 },
    { name: "Apr", sales: 300 },
    { name: "May", sales: 180 },
    { name: "Jun", sales: 200 },
    { name: "Jul", sales: 280 },
  ];
  const userCount = isLoading ? 0 : users;


  return (
    <div style={{ display: "flex" }}>
      <AdminLayout>
        <Box m="0px 0px 0px 20px" overflow="scroll" height="100vh" p="0px 20px 0px 0px" width="100%">
          <Topbar setIsSidebar={setIsSidebar} />
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            {/* ROW 1 */}
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/orders" style={{ textDecoration: "none" }}>
                <StatBox
                  subtitle="Orders"
                  increase={orderCount}
                  icon={
                    <ShoppingCartIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />

              </Link>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/allusers" style={{ textDecoration: "none" }}>
                <StatBox
                  subtitle="All Users"
                  increase={userCount}
                  icon={
                    <PersonAddAltIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />
              </Link>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <StatBox
                  subtitle="Track Orders"
                  //increase="0"
                  icon={
                    <TrackOrderIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />

              </Link>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/product" style={{ textDecoration: "none" }}>
                <StatBox
                  subtitle="Products"
                  increase={productCount}
                  icon={
                    <Inventory2SharpIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />
              </Link>
            </Box>

            {/* ROW 2 */}
            <Box
              gridColumn={{ xs: "span 12", sm: "span 12", md: "span 6" }}
              gridRow={{ xs: "span 1", sm: "span 2" }}
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="35px"
                mr="75px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">

                  {/* <Box marginLeft="210px">
          <Button
            variant="contained"
            color="primary"
           
            sx={{ marginRight: "10px" }}
          >
            Day
          </Button>
          <Button
            variant="contained"
            color="primary"
           
            sx={{ marginRight: "10px" }}
          >
            Week
          </Button>
          <Button
            variant="contained"
            color="primary"
           
          >
            Month
          </Button>
        </Box> */}

                </Box>
                <SalesChart data={productSalesData} />
              </Box>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 12", md: "span 6" }}
              gridRow={{ xs: "span 1", sm: "span 2" }}
              backgroundColor={colors.primary[400]}
              overflow="auto"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
              >
                <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                  Category Wise Product's Count
                </Typography>
              </Box>
            </Box>

            {/* ROW 3 */}
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
              gridRow={{ xs: "span 1", sm: "span 1.5" }}
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography variant="h5" fontWeight="600" textAlign="center">
                Total Earnings
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
              </Box>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
              gridRow={{ xs: "span 1", sm: "span 1.5" }}
              backgroundColor={colors.primary[400]}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                textAlign="center"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Admin Earnings
              </Typography>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
              padding="30px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                textAlign="center"
                sx={{ marginBottom: "15px" }}
              >
                Seller Earnings
              </Typography>
            </Box>

            {/* ROW 4 */}
            <Box
              gridColumn={{ xs: "span 12", sm: "span 12", md: "span 6" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    <pre>i  0 Product(s) sold out! <br></br>
                      More info
                    </pre>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 12", md: "span 6" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    <pre>i  0 Product(s) low in stock! (Low stock limit 15) <br></br>
                      More info
                    </pre>
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* ROW 5 */}
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography variant="h5" fontWeight="600" textAlign="center">
                Approved sellers
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
              </Box>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
              gridRow={{ xs: "span 1", sm: "span 1.5" }}
              backgroundColor={colors.primary[400]}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                textAlign="center"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Not Approved Sellers
              </Typography>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
              padding="30px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                textAlign="center"
                sx={{ marginBottom: "15px" }}
              >
                Deactivated sellers
              </Typography>
            </Box>

            {/* ROW 6 */}
            <Box
              gridColumn={{ xs: "span 12", sm: "span 12", md: "span 6" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    <pre>i  0 Seller(s) pending for approval! <br></br>
                      More info
                    </pre>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              gridColumn={{ xs: "span 12", sm: "span 12", md: "span 6" }}
              gridRow={{ xs: "span 1", sm: "span 1" }}
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    <pre>i  0 Seller(s) disabled! <br></br>
                      More info
                    </pre>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </AdminLayout>
    </div>
  );
};

export default Dashboard;
