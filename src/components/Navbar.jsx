import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#051837', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <h2 style={{color:'white',fontSize:'40px',margin:'0px'}}>Harsh <span style={{color:'#554f8b'}}>Tube!</span></h2>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
