import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <p>SOQE</p>
        <div>
          <ion-icon name="search-outline" />
          <ion-icon name="person-outline" />
          <ion-icon name="cart-outline" />
        </div>
      </nav>
    </header>

  );
}

export default Header;
