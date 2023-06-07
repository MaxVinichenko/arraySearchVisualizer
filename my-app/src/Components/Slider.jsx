import ReactSlider from "react-slider";
import "./Slider.css"

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="thumb"
      trackClassName="track"
    />
  );
};

export default Slider;