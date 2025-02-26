import "./App.css";

import DynamiCards from "./Components/DynamiCards";
import Sidebar from "./Components/Sidebar";
import { Box } from "@mui/material";

function App() {
  return (
    // <div className="App">
    <>
      <Box display={"flex"}>
        <Sidebar />
        <DynamiCards />
      </Box>
      {/* // remaining-- */}
    </>
    // </div>
  );
}

export default App;
