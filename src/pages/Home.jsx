import Button from "../components/Button";
import IntroText from "../components/IntroText";
import Logo from "../components/Logo";

function Home() {
  return (
    <>
      <Logo />
      <IntroText />
      <Button type="link" pageTo="/settings" styled="primary">
        Start
      </Button>
    </>
  );
}

export default Home;
