import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";
import TeamForm from "./components/TeamForm";
import UserForm from "./components/UserForm";
import TeamList from "./components/TeamList";
import Diagram from "./pages/Diagram";
import Charts from "./pages/Charts";

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Team Management System</Typography>
          <div>
            <Button color="inherit" component={Link} to="/">Home Page</Button>
            <Button color="inherit" component={Link} to="/diagram">Diagram</Button>
            <Button color="inherit" component={Link} to="/charts">Graphics</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={
            <>
              <TeamForm />
              <UserForm />
              <TeamList />
            </>
          } />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
