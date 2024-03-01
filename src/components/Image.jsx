function Image({ image }) {
  return (
    <figure className="mb-5 w-72">
      <img src={image} className="w-100" alt="person meditating" />
    </figure>
  );
}

export default Image;
