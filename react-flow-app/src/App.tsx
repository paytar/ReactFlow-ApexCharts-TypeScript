import { Routes, Route, Link } from "react-router-dom";
import TeamForm from "./components/TeamForm";
import UserForm from "./components/UserForm";
import TeamList from "./components/TeamList";
import Diagram from "./pages/Diagram";
import Charts from "./pages/Charts";

const App = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px", background: "#007BFF", color: "#fff" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Ana Sayfa</Link>
        <Link to="/diagram" style={{ color: "#fff", textDecoration: "none" }}>Diyagram</Link>
        <Link to="/charts" style={{ color: "#fff", textDecoration: "none" }}>Grafikler</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <h1>Ekip Yönetim Sistemi</h1>
            <TeamForm />
            <UserForm />
            <TeamList />
          </>
        } />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </>
  );
};

export default App;
