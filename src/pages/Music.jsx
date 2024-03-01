import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Sounds from "../components/Sounds";

function Music() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center px-5">
        <Sounds />
        <Button type="link" pageTo="/settings" styled="secondary">
          &larr; Back
        </Button>
      </main>
      <Footer />
    </>
  );
}

export default Music;
