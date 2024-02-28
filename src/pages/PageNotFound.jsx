import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";

import questionSvg from '../assets/img/undraw_questions.svg'
import Button from "../components/Button";

function PageNotFound() {
  return (
    <>
    <Header />
    <main className="flex flex-col justify-center items-center px-5">
      <Image image={questionSvg}/>
      <div className="text-center my-4">
        <p>We&apos;re sorry, we can&apos;t find what you&apos;re looking for.</p>
      </div>
      <Button type='link' pageTo='/' styled='secondary'>&larr; Back home</Button>
    </main>
    <Footer />
  </>
  );
}

export default PageNotFound;
