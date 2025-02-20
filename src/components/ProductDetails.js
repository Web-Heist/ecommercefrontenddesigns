import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductDetails = () => {
  const { cart, addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
    price: 98.0,
    image: "image34.png",
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const catagorybar = () => {
    console.log("Category bar clicked");
  };

  return (
    <div>

      {/* Header */}

      <header className="header">
        <div className="logo">
          <a href="https://web-heist.github.io/Ecommerce-Website/">
            <img src="logo-colored.svg" alt="" />
          </a>
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search" />
          <div className="dropdown-container">
            <select className="dropdown">
              <option>All category</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <button className="search-button">Search</button>
        </div>
        <div className="icons">
          <div className="icon">
            <a href="https://web-heist.github.io/Ecommerce-Website/#user"></a>
            <i className="fa fa-user"></i>
            <p>Profile</p>
          </div>
          <div className="icon">
            <a href="https://web-heist.github.io/Ecommerce-Website/#req">
              <i className="fa fa-envelope"></i>
            </a>
            <p>Message</p>
          </div>
          <div className="icon">
            <a href="https://web-heist.github.io/Product-list/">
              <i className="fa fa-heart"></i>
            </a>
            <p>Orders</p>
          </div>
          <div className="icon">
            <a href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
            <p>Cart</p>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      
      <nav className="nav_bar">
        <a className="nav_item" onClick={catagorybar}>
          <i className="fa fa-list"></i> All catagory
        </a>
        <a className="nav_item" href="https://web-heist.github.io/Ecommerce-Website/#offers">Hot offers</a>
        <a className="nav_item" href="https://web-heist.github.io/Product-list/">Product list</a>
        <a className="nav_item" href="https://web-heist.github.io/Product-details/">Product detail</a>
        <a className="nav_item" href="#">Gift boxes</a>
        <a className="nav_item">
          <select className="dropdown" style={{ borderColor: 'white' }}>
            <option>Help</option>
            <option>Resources</option>
            <option>Support</option>
          </select>
        </a>
        <a className="nav_item2">
          <select className="dropdown" style={{ borderColor: 'white' }}>
            <option>English,USD</option>
            <option>Urdu</option>
            <option>German</option>
            <option>Italian</option>
          </select>
        </a>
        <a className="nav_item">
          Ship to <img src="germany.png" width="30rem" alt=""/>
          <select className="dropdown" style={{ borderColor: 'white', fontSize: '0.9rem', width: '3rem' }}>
            <option></option>
            <option value="US">&#127466;&#127480;</option>
            <option value="AU">&#127462;&#127482;</option>
            <option value="CN">&#127462;&#127475;</option>
          </select>
        </a>
      </nav>

      <menuheader>
        <nav>
          <ul>
            <li><a href="https://web-heist.github.io/Ecommerce-Website/">Home</a></li>
            <li><a href="#">-</a></li>
            <li><a href="https://web-heist.github.io/Product-details/">Clothing</a></li>
            <li><a href="#">-</a></li>
            <li><a href="#">Men's Wear</a></li>
            <li><a href="#">-</a></li>
            <li><a href="#">Summer Clothing</a></li>
          </ul>
        </nav>
      </menuheader>

      <main>
        <div className="product-page">
          <div className="product-details">
            <div className="product-images">
              <img src="image34.png" alt="ProductImage" className="main-image" />
              <div className="thumbnail-images">
                <img src="image40.png" alt="Thumbnail 1" />
                <img src="image36.png" alt="Thumbnail 2" />
                <img src="image37.png" alt="Thumbnail 3" />
                <img src="image40.png" alt="Thumbnail 4" />
                <img src="image39.png" alt="Thumbnail 4" />
                <img src="image37.png" alt="Thumbnail 4" />
              </div>
            </div>

            <div className="product-d">
              <p className="status"><i className="fa fa-check"></i> In stock</p>
              <h1>Mens Long Sleeve T-shirt Cotton Base<br />Layer Slim Muscle</h1>
              <div className="ratings">
                <span>⭐⭐⭐⭐ <i className="fa fa-star"></i> 9.3</span>
                <span><i className="fa fa-comment"></i> 32 reviews</span>
                <span><i className="fa fa-shopping-basket"></i> 104 sold</span>
              </div>
              <div className="price">
                <span>
                  <p className="first-price">$98.00 <br /><y>100-200 pcs</y></p>
                  <p> | </p>
                  <p>$90.00 <br /><y>150-500 pcs</y></p>
                  <p> | </p>
                  <p>$78.00 <br /><y>700 pcs</y></p>
                </span>
              </div>
              <table>
                <tbody>
                  <tr><th>Price:</th><td>Negotiable</td></tr>
                  <tr><th>Type:</th><td>Classic shoes</td></tr>
                  <tr><th>Material:</th><td>Plastic material</td></tr>
                  <tr><th>Design:</th><td>Modern idea</td></tr>
                  <tr><th>Customization:</th><td>Customized logo<br />and design custom packages</td></tr>
                  <tr><th>Protection:</th><td>Refund Policy</td></tr>
                  <tr><th>Warranty:</th><td>2 years full warranty</td></tr>
                </tbody>
              </table>
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>

            
            <div className="supplier-user">
              <div>
                <p>M</p>
                <h3>Supplier<br />Trading Center LLC</h3>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <img src="germany.png" width="25rem" alt="" />
                    </th>
                    <td>Germany, Berlin</td>
                  </tr>
                  <tr>
                    <th><i className="fa fa-diamond"></i></th>
                    <td> Verified Seller</td>
                  </tr>
                  <tr>
                    <th><i className="fa fa-globe"></i></th>
                    <td> Worldwide shipping</td>
                  </tr>
                </tbody>
              </table>
              <button className="inquiry-btn">Send inquiry</button>
              <button className="profile-btn">Seller's profile</button>
              <button className="save-btn">
                <i className="fa fa-heart"></i> Save for later
              </button>
            </div>
          </div>

          {/* Middle Section */}
          <div className="middle-section">
            <div className="main-tab">
              <div className="tabs">
                <button className="tab active">Description</button>
                <button className="tab">Reviews</button>
                <button className="tab">Shipping</button>
                <button className="tab">About Seller</button>
              </div>
              <div className="tab-content">
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor dolor sit amet <br />
                  sit amet Lorem Lorem ipsum dolor sit amet Lorem ipsum  amet Lorem ipsum dolor sit Lorem ipsum dolor sit<br />
                  Lorem ipsum dolor   amet Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit  amet Lo
                  amet Lorem ipsum dolor<br />
                  sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor s dolor dolor sit amet <br />
                  Lorem ipsum dolor  amet Lo Lorem ipsum dolor sit amet Lorem ipsum  amet Lorem ipsum dolor sit Lorem ipsum dolor sit<br />
                  sit amet Lorem ipsum  amet Lorem ipsum dolor sit Lorem ipsum dolor sit  amet Lo amet Lorem ipsum dolor<br />
                  Lorem ipsum dolor  Lorem ipsum dolor sit amet
                </p>
                <table>
                  <tbody>
                    <tr><th> Model: </th><td> #8765432 </td></tr>
                    <tr><th> Style: </th><td> Classic style </td></tr>
                    <tr><th> Certificate: </th><td> ISO-987612 </td></tr>
                    <tr><th> Size:</th><td> 34mm x 450mm x 19mm </td></tr>
                    <tr><th> Memory: </th><td> 36GB RAM </td></tr>
                  </tbody>
                </table>
                <ul>
                  <li><i className="fa fa-check"></i> Some great feature name here</li>
                  <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet</li>
                  <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet</li>
                  <li><i className="fa fa-check"></i> Some great feature name here</li>
                </ul>
              </div>
            </div>

            {/* You May Like Section */}
            <div className="you-may-like">
              <h2>You may like</h2>
              <div className="suggested-products">
                <div className="product-card">
                  <img src="c2.jpg" alt="Product 1" />
                  <p>
                    High quality blue Tshirt<br /> <span>$700 - $900</span>
                  </p>
                </div>
                <div className="product-card">
                  <img src="6.jpg" alt="Product 1" />
                  <p>
                    High quality camera<br /> <span>$700 - $900</span>
                  </p>
                </div>
                <div className="product-card">
                  <img src="9.jpg" alt="Product 2" />
                  <p>
                    White headphones <br /> <span>$200 - $500</span>
                  </p>
                </div>
                <div className="product-card">
                  <img src="c3.jpg" alt="Product 3" />
                  <p>
                    Brown Jacket for men <br /> <span>$500 - $900</span>
                  </p>
                </div>
                <div className="product-card">
                  <img src="1.jpg" alt="Product 4" />
                  <p>
                    Brand new smartphone<br /> <span>$200 - $700</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="related-products">
            <h2>Related Products</h2>
            <div className="all-products">
              <div className="product">
                <img src="t4.jpg" alt="Related Product 1" />
                <p>Xiaomi Redmi 8</p>
                <p>$20.00 - $40.00</p>
              </div>
              <div className="product">
                <img src="t8.jpg" alt="Related Product 1" />
                <p>Xiaomi Redmi 8</p>
                <p>$20.00 - $40.00</p>
              </div>
              <div className="product">
                <img src="c4.jpg" alt="Related Product 1" />
                <p>Xiaomi Redmi 8</p>
                <p>$20.00 - $40.00</p>
              </div>
              <div className="product">
                <img src="t10.jpg" alt="Related Product 1" />
                <p>Xiaomi Redmi 8</p>
                <p>$20.00 - $40.00</p>
              </div>
              <div className="product">
                <img src="c1.jpg" alt="Related Product 1" />
                <p>Xiaomi Redmi 8</p>
                <p>$20.00 - $40.00</p>
              </div>
              <div className="product">
                <img src="c6.jpg" alt="Related Product 1" />
                <p>Xiaomi Redmi 8</p>
                <p>$20.00 - $40.00</p>
              </div>
            </div>
          </div>

          {/* Discount Banner */}
          <div className="banner">
            <div className="discount-banner">
              <p>Super discount on more than 100 USD</p>
              <p1>Have you ever finally just write dummy info</p1>
            </div>
            <button>Shop now</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-icon">
              <img src="logo-colored.svg" alt="" />
            </div>
            <p>Best information about the company goes here but now lorem ipsum is</p>
            <div className="social-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-youtube"></i>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>About</h3>
              <ul>
                <li>About Us</li>
                <li>Find Store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h3>Partnership</h3>
              <ul>
                <li>About Us</li>
                <li>Find Store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h3>Information</h3>
              <ul>
                <li>Help Center</li>
                <li>Money Refund</li>
                <li>Shipping</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h3>For users</h3>
              <ul>
                <li>Login</li>
                <li>Register</li>
                <li>Settings</li>
                <li>My Orders</li>
              </ul>
            </div>
            <div>
              <h3>Get app</h3>
              <div className="app-buttons">
                <img className="img1" src="apple.png" alt="" />
                <img className="img2" src="google.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Ecommerce.</p>
          <div className="language-selector">
            <img src="usa.png" alt="" />
            <span>English</span>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
