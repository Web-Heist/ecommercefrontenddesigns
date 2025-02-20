import React, { useContext } from "react";
import { WishlistContext } from "./context/WishlistContext";

const ProductList = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);

  // Function to toggle category bar visibility
  const catagorybar = () => {
    const bar = document.getElementById("catagorybar");
    if (bar.style.display === "none" || bar.style.display === "") {
      bar.style.display = "block";
    } else {
      bar.style.display = "none";
    }
  };

  // Function to show/hide extra categories
  const seemorecatagory = () => {
    const container = document.getElementById("extra-categories");
    const button = document.getElementById("toggle-button1");

    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      button.textContent = "See less";

      if (!container.hasChildNodes()) {
        const categories = ["Laptops/PC", "Electronics", "SmartPhones"];
        categories.forEach((category) => {
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          label.appendChild(checkbox);
          label.append(` ${category}`);
          container.appendChild(label);
        });
      }
    } else {
      container.style.display = "none";
      button.textContent = "See all";
    }
  };

  // Function to show/hide extra brands
  const seemorebrand = () => {
    const container = document.getElementById("extra-brand");
    const button = document.getElementById("toggle-button2");

    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      button.textContent = "See less";

      if (!container.hasChildNodes()) {
        const brands = ["Sony", "Lenovo", "Redmi"];
        brands.forEach((brand) => {
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          label.appendChild(checkbox);
          label.append(` ${brand}`);
          container.appendChild(label);
        });
      }
    } else {
      container.style.display = "none";
      button.textContent = "See all";
    }
  };

  // Function to show/hide extra features
  const seemorefeature = () => {
    const container = document.getElementById("extra-feature");
    const button = document.getElementById("toggle-button3");

    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      button.textContent = "See less";

      if (!container.hasChildNodes()) {
        const features = ["Plastic cover", "Metalic", "6GB Ram"];
        features.forEach((feature) => {
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          label.appendChild(checkbox);
          label.append(` ${feature}`);
          container.appendChild(label);
        });
      }
    } else {
      container.style.display = "none";
      button.textContent = "See all";
    }
  };

  // Functions to change product images
  const changeImage1 = () => {
    document.getElementById("image1").src = "2.jpg";
    document.getElementById("image2").src = "3.jpg";
    document.getElementById("image3").src = "1.jpg";
    document.getElementById("image4").src = "8.jpg";
    document.getElementById("image5").src = "5.jpg";
    document.getElementById("image6").src = "6.jpg";
  };

  const changeImage2 = () => {
    document.getElementById("image1").src = "4.jpg";
    document.getElementById("image2").src = "5.jpg";
    document.getElementById("image3").src = "7.jpg";
    document.getElementById("image4").src = "9.jpg";
    document.getElementById("image5").src = "10.jpg";
    document.getElementById("image6").src = "1.jpg";
  };

  const changeImage3 = () => {
    document.getElementById("image1").src = "9.jpg";
    document.getElementById("image2").src = "6.jpg";
    document.getElementById("image3").src = "1.jpg";
    document.getElementById("image4").src = "8.jpg";
    document.getElementById("image5").src = "3.jpg";
    document.getElementById("image6").src = "2.jpg";
  };

  const changeImage4 = () => {
    document.getElementById("image1").src = "1.jpg";
    document.getElementById("image2").src = "4.jpg";
    document.getElementById("image3").src = "6.jpg";
    document.getElementById("image4").src = "2.jpg";
    document.getElementById("image5").src = "3.jpg";
    document.getElementById("image6").src = "8.jpg";
  };

  const changeImage5 = () => {
    document.getElementById("image1").src = "2.jpg";
    document.getElementById("image2").src = "3.jpg";
    document.getElementById("image3").src = "7.jpg";
    document.getElementById("image4").src = "8.jpg";
    document.getElementById("image5").src = "5.jpg";
    document.getElementById("image6").src = "6.jpg";
  };

  const changeImage6 = () => {
    document.getElementById("image1").src = "1.jpg";
    document.getElementById("image2").src = "4.jpg";
    document.getElementById("image3").src = "6.jpg";
    document.getElementById("image4").src = "2.jpg";
    document.getElementById("image5").src = "3.jpg";
    document.getElementById("image6").src = "8.jpg";
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
          <a href="https://web-heist.github.io/Ecommerce-Website/#user">
            <div className="icon">
              <i className="fa fa-user"></i>
              <p>Profile</p>
            </div>
          </a>
          <a href="https://web-heist.github.io/Ecommerce-Website/#req">
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <p>Message</p>
            </div>
          </a>
          <a href="https://web-heist.github.io/Product-list/">
            <div className="icon">
              <i className="fa fa-heart"></i>
              <p>Orders</p>
            </div>
          </a>
          <a href="">
            <div className="icon">
              <i className="fa fa-shopping-cart"></i>
              <p>Cart</p>
            </div>
          </a>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav_bar">
        <a className="nav_item" onClick={catagorybar}>
          <i className="fa fa-list"></i> All catagory
        </a>
        <a className="nav_item" href="https://web-heist.github.io/Ecommerce-Website/#offers">
          Hot offers
        </a>
        <a className="nav_item" href="https://web-heist.github.io/Product-list/">
          Product list
        </a>
        <a className="nav_item" href="https://web-heist.github.io/Product-details/">
          Product detail
        </a>
        <a className="nav_item" href="#">
          Gift boxes
        </a>
        <a className="nav_item">
          <select className="dropdown" style={{ borderColor: "white" }}>
            <option>Help</option>
            <option>Resources</option>
            <option>Support</option>
          </select>
        </a>
        <a className="nav_item2">
          <select className="dropdown" style={{ borderColor: "white" }}>
            <option>English,USD</option>
            <option>Urdu</option>
            <option>German</option>
            <option>Italian</option>
          </select>
        </a>
        <a className="nav_item">
          Ship to <img src="germany.png" width="30rem" alt="" />
          <select className="dropdown" style={{ borderColor: "white", fontSize: "0.9rem", width: "3rem" }}>
            <option></option>
            <option value="US">&#127466;&#127480;</option>
            <option value="AU">&#127462;&#127482;</option>
            <option value="CN">&#127462;&#127475;</option>
          </select>
        </a>
      </nav>

      {/* Category Bar */}
      <div className="category-bar" id="catagorybar">
        <div className="section">
          <h3>Category</h3>
          <label>
            <input type="checkbox" />
            Mobile accessory
          </label>
          <label>
            <input type="checkbox" />
            Electronics
          </label>
          <label>
            <input type="checkbox" />
            SmartPhones
          </label>
          <label>
            <input type="checkbox" />
            Home Appliances
          </label>
          <h6 onClick={seemorecatagory} id="toggle-button1">
            See all
          </h6>
          <div id="extra-categories"></div>
        </div>

        <div className="section">
          <h3>Brands</h3>
          <label>
            <input type="checkbox" />
            Samsung
          </label>
          <label>
            <input type="checkbox" />
            Apple
          </label>
          <label>
            <input type="checkbox" />
            Poco
          </label>
          <label>
            <input type="checkbox" />
            Lenovo
          </label>
          <h6 onClick={seemorebrand} id="toggle-button2">
            See all
          </h6>
          <div id="extra-brand"></div>
        </div>

        <div className="section">
          <h3>Features</h3>
          <label>
            <input type="checkbox" />
            Plastic cover
          </label>
          <label>
            <input type="checkbox" />
            Metalic
          </label>
          <label>
            <input type="checkbox" />
            8GB Ram
          </label>
          <h6 onClick={seemorefeature} id="toggle-button3">
            See all
          </h6>
          <div id="extra-feature"></div>
        </div>

        <div className="section">
          <h3>Price Range</h3>
          <input type="range" min="100" max="1000" step="10" />
          <div className="price-labels">
            <span>MIN</span>
            <span>MAX</span>
          </div>
          <div className="section">
            <button>Apply</button>
          </div>
        </div>
        <div className="section">
          <h3>Condition</h3>
          <label>
            <input type="radio" name="condition" />
            Any
          </label>
          <label>
            <input type="radio" name="condition" />
            Brand New
          </label>
          <label>
            <input type="radio" name="condition" />
            Used
          </label>
          <label>
            <input type="radio" name="condition" />
            Refurbished
          </label>
        </div>

        <div className="section">
          <h3>Rating</h3>
          <label>
            <input type="checkbox" name="rating" />
            ⭐⭐⭐⭐⭐
          </label>
          <label>
            <input type="checkbox" name="rating" />
            ⭐⭐⭐⭐
          </label>
          <label>
            <input type="checkbox" name="rating" />
            ⭐⭐⭐
          </label>
          <label>
            <input type="checkbox" name="rating" />
            ⭐⭐
          </label>
          <label>
            <input type="checkbox" name="rating" />
            ⭐
          </label>
        </div>
      </div>

      {/* Menu Header */}
      <menuheader>
        <nav>
          <ul>
            <li>
              <a href="https://web-heist.github.io/Ecommerce-Website/">Home</a>
            </li>
            <li>
              <a href="#">-</a>
            </li>
            <li>
              <a href="https://web-heist.github.io/Product-details/">Clothing</a>
            </li>
            <li>
              <a href="#">-</a>
            </li>
            <li>
              <a href="#">Men's Wear</a>
            </li>
            <li>
              <a href="#">-</a>
            </li>
            <li>
              <a href="#">Summer Clothing</a>
            </li>
          </ul>
        </nav>
      </menuheader>

      {/* Filters and Products */}
      <div className="filters-and-products">
        <section className="products">
          <div className="toolbar">
            <p>
              12,911 items in <strong>Mobile Accessories</strong>
            </p>
            <div className="toolbar-options">
              <label>
                <input type="checkbox" />
                  Verified only 
              </label>
              <select>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div className="view-toggle">
                <button id="list-view">
                  <i className="fa fa-th-large" > </i> 
                </button>
                <button id="grid-view">
                   <i className="fa fa-list" > </i>
                </button>
              </div>
            </div>
          </div>

          <div className="product-list">
  {[1, 2, 3, 4, 5, 6].map((id) => (
    <div className="product-item" key={id}>
      <img src={`t${id}.jpg`} alt={`Product ${id}`} id={`image${id}`} />
      <div className="product-info">
        <h4>Canon Camera EOS 2000</h4>
        <div className="prices">
        <p className="price">
          $998.00
        </p>
        <p className="old-price">$1128.00</p>
        </ div>
        <p>⭐ 7.5 | 154 orders | Free Shipping</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
        <button>Add to Wishlist</button>
      </div>
    </div>
  ))}
</div>

        </section>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn prev-btn" onClick={changeImage5}>
          Previous
        </button>
        <div className="page-numbers">
          <button className="page-btn active" onClick={changeImage1}>
            1
          </button>
          <button className="page-btn" onClick={changeImage2}>
            2
          </button>
          <button className="page-btn" onClick={changeImage3}>
            3
          </button>
          <span className="dots">...</span>
          <button className="page-btn" onClick={changeImage4}>
            10
          </button>
        </div>
        <button className="page-btn next-btn" onClick={changeImage6}>
          Next
        </button>
      </div>

      {/* Newsletter */}
      <div className="news-letter">
        <h2>
          <b> Subscribe on our newsletter </b>
        </h2>
        <p>Get daily news on upcomming offers from many supplier all over the world</p>
        <div className="email-section">
          <i className="fa fa-envelope"></i>
          <input type="text" className="email-input" placeholder="Email" />
          <button className="email-btn">Subscribe</button>
        </div>
      </div>

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

export default ProductList;