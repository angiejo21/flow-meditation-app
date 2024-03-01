import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

function Settings() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center px-5">
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Settings;
