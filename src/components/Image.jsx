function Image({ image, alt }) {
  return (
    <figure className="mb-5 w-72">
      <img src={image} className="w-100" alt={alt} />
    </figure>
  );
}

export default Image;
