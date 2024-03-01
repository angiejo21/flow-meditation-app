import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";

import Audios from "./components/Audios";
import Music from "./pages/Music";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const { isThemeDark } = useSelector((store) => store.darkMode);

  return (
    <div className={isThemeDark ? "dark" : ""}>
      <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-slate-100 to-teal-100 dark:from-teal-950 dark:to-slate-950">
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
    </div>
  );
}

export default App;
