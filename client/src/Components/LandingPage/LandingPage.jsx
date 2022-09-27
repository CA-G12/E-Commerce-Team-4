import Categories from './Categories/Categories'
import Products from './Products/Products'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './LandingPage.css'

function LandingPage() {
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  )
}

export default LandingPage
