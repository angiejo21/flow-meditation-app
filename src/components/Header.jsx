import ButtonMusic from "./ButtonMusic";
import ButtonTheme from "./ButtonTheme";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" w-full flex items-center justify-between p-2">
      <Logo />
      <div>
        <ButtonMusic />
        <ButtonTheme />
      </div>
    </header>
  );
}

export default Header;
