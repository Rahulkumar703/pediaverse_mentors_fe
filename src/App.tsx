import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import { StudentsProfilePage } from "./pages/StudentsProfilePage";
import { AboutStudentsPage } from "./pages/AboutStudentsPage";


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Layout><StudentsProfilePage /></Layout>} />
        <Route path={'/about-students/:id'} element={<Layout><AboutStudentsPage /></Layout>} />
      </Routes>
    </Router>
  );
}
