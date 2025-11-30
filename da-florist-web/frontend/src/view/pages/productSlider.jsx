import React from 'react';
import Slider from 'react-slick';
import './pages-style/productSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// fixed: correct path from src/view/pages -> src/data
import products from '../data/products.json';

const imageModules = import.meta.glob('/src/assets/image/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
// imageModules is object: { '/src/assets/image/tulip.jpg': 'http://.../assets/tulip.abc123.jpg', ... }

// create a lookup by basename
const imageByName = Object.fromEntries(
  Object.entries(imageModules).map(([fullPath, url]) => {
    const name = fullPath.split('/').pop(); // "tulip.jpg"
    return [name, url];
  })
);

// helper to resolve a product image entry (handles string or array, and Windows path)
function resolveImageUrl(imgEntry) {
  if (!imgEntry) return '';
  const first = Array.isArray(imgEntry) ? imgEntry[0] : imgEntry;
  // if it's already a URL path (starts with http or /), return it
  if (/^(https?:)?\/\//.test(first) || first.startsWith('/')) return first;
  // otherwise try to get basename from Windows path or relative path
  const basename = first.split(/[\\/]/).pop(); // works with backslashes
  return imageByName[basename] || '';
}

export default function ProductSlider(){
  const formatPrice = v => {
    if (v == null) return '';
    return new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' }).format(v);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: products.length > 3,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 720, settings: { slidesToShow: 1 } }
    ],
    appendDots: dots => <div className="slick-dots-wrapper"><ul>{dots}</ul></div>
  };

  return (
    <section className="product-section">
      <div className="header">
        <h2>Our bestsellers</h2>
        <a className="read-more" href="#!">Read more</a>
      </div>

      <Slider {...settings} className="products-slider">
        {products.map(product => {
          const images = Array.isArray(product.images) ? product.images : [product.images];
          const imgUrl = resolveImageUrl(images[0]);
          return (
            <div key={product.id} className="slide-wrapper">
              <article className="product-card">
                <div className="card-media">
                  {product.badge && <div className="card-badge">{product.badge}</div>}
                  <img src={imgUrl} alt={product.title} />
                </div>

                <div className="card-info">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-desc">{product.subtitle}</p>
                  <p className="card-price">
                    {product.oldPrice ? <span className="card-oldprice">{formatPrice(product.oldPrice)}</span> : null}
                    <span>{formatPrice(product.price)}</span>
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}