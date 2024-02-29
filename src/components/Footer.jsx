function Footer() {
  return (
    <footer className="w-full text-center p-2 dark:text-teal-100">
      &copy; {new Date().getFullYear()} <a href="http://bello.codes" target="blank" className="text-teal-600">Angela Bellò</a>
    </footer>
  );
}

export default Footer;
