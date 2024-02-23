import Button from "../components/Button";
import IntroText from "../components/IntroText";
import Logo from "../components/Logo";

function Home() {
  return (
    <div>
      <Logo />
      <IntroText />
      <Button type="link" pageTo="/settings" styled="primary">
        Begin your journey
      </Button>
    </div>
  );
}

export default Home;
