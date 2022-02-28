import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserForm from "./components/Form/UserForm";

function App() {
  return (
    <Router>
      <div>
        <div className="home-title">
          <h1>Dashboard</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  marginTop: "100px",
                  textAlign: "center",
                  color: "red",
                }}
              >
                {" "}
                404 Not Found
              </div>
            }
          />

          <Route path="/add-user" element={<UserForm variant="add" />} />
          <Route path="/edit-user/:id" element={<UserForm variant="edit" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
