import meditation from "./../assets/img/undraw_meditation.svg";

function Image() {
  return (
    <figure className="w-72 mb-5">
      <img src={meditation} className="w-100" alt="person meditating" />
    </figure>
  );
}

export default Image;
