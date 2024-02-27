import Button from "../components/Button";
import IntroText from "../components/IntroText";
import Image from "../components/Image";

function Home() {
  return (
    <>
      <Image />
      <IntroText />
      <Button type="link" pageTo="/settings" styled="primary">
        Begin your journey
      </Button>
    </>
  );
}

export default Home;
