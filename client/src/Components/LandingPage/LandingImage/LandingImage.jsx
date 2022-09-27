import './LandingImage.css';
import image from './image.jpg';

function LandingImage() {
  return (
    <div className="landing-image-container">
      <img src={image} alt="" />
    </div>
  );
}

export default LandingImage;
