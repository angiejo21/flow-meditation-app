function Image({image}) {
  return (
    <figure className="w-72 mb-5">
      <img src={image} className="w-100" alt="person meditating" />
    </figure>
  );
}

export default Image;
