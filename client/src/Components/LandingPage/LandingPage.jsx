import LandingImage from './LandingImage/LandingImage';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import './LandingPage.css';

function LandingPage() {
  return (
    <div>
      <LandingImage />
      <Categories />
      <Products />
    </div>
  );
}

export default LandingPage;
