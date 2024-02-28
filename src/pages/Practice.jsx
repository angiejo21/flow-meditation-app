import Header from "../components/Header";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

function Practice() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center px-5">
        <Timer />
      </main>
      <Footer />
    </>
  );
}

export default Practice;
