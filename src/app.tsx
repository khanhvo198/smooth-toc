import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
