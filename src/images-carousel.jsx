export function ImagesCarousel({source, text, btnText}) {
  return (
    <div className="container-carousel">
      <div className="flyEase-img-container">
        <img src={source} alt="img-banner" />
        <p className="image-text">{text}</p>
        <button className="flyEase-btnInfo">{btnText}</button>
      </div>
    </div>
  );
}
