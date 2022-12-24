// import { AppBar } from "@mui/material";
import { Box } from '@mui/system';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      alignContent="center"
      p='50px'
    >
      <AppBar />
      <Outlet />
    </Box>
  );
};
