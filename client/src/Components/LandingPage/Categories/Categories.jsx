import './Categories.css';

function Categories() {
  return (
    <section className="categories-container">
      <div style={{ backgroundImage: 'url("https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/01/samsung-galaxy-s22-ultra-note-etkisi-yuzunden-zamli-olacak1-1.webp?fit=1280%2C720&ssl=1")' }}>
        <p>Mobile</p>
      </div>

      <div style={{ backgroundImage: 'url("https://assets.mspimages.in/wp-content/uploads/2021/06/Mi-Notebook-Pro-X.jpg")' }}>
        <p>Laptop</p>
      </div>

      <div style={{ backgroundImage: 'url("https://www.hihonor.com/content/dam/honor/global/products/wearable/honor-watch-gs-pro/pic-section_01.jpg")' }}>
        <p>Watch</p>
      </div>

      <div style={{ backgroundImage: 'url("https://assets2.razerzone.com/images/og-image/pc-accessories-category-OGimage.jpg")' }}>
        <p>Accessories</p>
      </div>

    </section>

  );
}

export default Categories;
