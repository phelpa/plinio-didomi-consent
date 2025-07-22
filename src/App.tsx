import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import GiveConsent from "./pages/GiveConsent";
import CollectedConsents from "./pages/CollectedConsents";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Navigate to="/give-consent" replace />} />
          <Route path="/give-consent" element={<GiveConsent />} />
          <Route path="/consents" element={<CollectedConsents />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
