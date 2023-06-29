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
import { Box,useMediaQuery, useTheme } from "@mui/material";

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
    <Box>
     
      <LineChart 
        width={isNonMobile ? 400 : 250}
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
