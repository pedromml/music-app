import { useRef } from "react";

const  PictureList = ({ title, songList }) => {
  const horizontalScrollRef = useRef();
  const onWheel = (e) => {
    const elm = horizontalScrollRef.current;
    if (elm) {
      if (e.deltaY === 0) return;
      elm.scrollTo({
        left: elm.scrollLeft + e.deltaY / 2,
      });
    }
  };
  return (
    <div className="picture-list-container">
      <p className="list-title">{title}</p>
      <div
        className="picture-list-horizontal"
        ref={horizontalScrollRef}
        onWheel={onWheel}
      >
        {songList}
      </div>
    </div>
  );
}

export default PictureList;