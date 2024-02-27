import ButtonTheme from "./ButtonTheme";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 flex items-center justify-between bg-slate-50">
      <Logo />
      <ButtonTheme />
    </header>
  );
}

export default Header;
