import { Box, Button, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <div className="App">
      App Page
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </Box>
    </div>
  );
}
