import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const SalesChart = ({ data }) => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const colors = {
    grey: {
      500: "#9E9E9E",
    },
    white: "#FFFFFF",
  };

  return (
    <Box marginTop="40px" marginRight="100px">
      {/* <Typography
        variant={isNonMobile ? "h5" : "h6"}
        component="div"
        color={colors.white}
        align={isNonMobile ? "left" : "center"}
      >
        Product Sales
      </Typography> */}
      <LineChart
        width={isNonMobile ? 400 : 300}
        height={isNonMobile ? 200 : 150}
        data={data}
      >
        <XAxis dataKey="name" stroke={colors.white} />
        <YAxis stroke={colors.white} />
        <CartesianGrid stroke={colors.grey[500]} strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke={colors.grey[500]} />
      </LineChart>
    </Box>
  );
};

export default SalesChart;
