import "./Gallery.css";

const Gallery = () => {
  const imageSources = ["./photos/cat.webp", "./photos/logo.svg"];
  const images = imageSources.map((img) => {
    return <img class={"galleryImage"} src={require("" + img)} />;
  });

  return (
    <div>
      <div class={"galleryContainer"}>{images}</div>
    </div>
  );
};

export default Gallery;
