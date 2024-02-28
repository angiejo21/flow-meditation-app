import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import IntroText from "../components/IntroText";
import Image from "../components/Image";

import meditateSvg from "./../assets/img/undraw_meditation.svg";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center px-5">
        <Image image={meditateSvg}/>
        <IntroText />
        <Button type="link" pageTo="/settings" styled="primary">
          Begin your journey
        </Button>
      </main>
      <Footer />
    </>
  );
}

export default Home;
