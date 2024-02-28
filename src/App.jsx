import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";

import Audios from "./components/Audios";
import Music from "./pages/Music";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gradient-to-b from-slate-100 to-teal-100 ">
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="music" element={<Music />} />
            <Route
              path="practice"
              element={
                <ProtectedRoute>
                  <Practice />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Audios />
    </div>
  );
}

export default App;
