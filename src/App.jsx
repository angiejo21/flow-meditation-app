import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Audios from "./components/Audios";
import Music from "./pages/Music";

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="music" element={<Music />} />
            <Route path="practice" element={<Practice />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Audios />
      </main>
      <Footer />
    </>
  );
}

export default App;
