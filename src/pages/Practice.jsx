import Header from "../components/Header";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import AudioMeditation from "../components/AudioMeditation";

function Practice() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center px-5">
        <Timer />
        <AudioMeditation />
      </main>
      <Footer />
    </>
  );
}

export default Practice;
