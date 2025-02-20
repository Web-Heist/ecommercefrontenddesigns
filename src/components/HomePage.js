import React from 'react';
const Hpage = () => {
  const catagorybar = () => {
    console.log("Category bar clicked");
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src="logo-colored.svg" alt="Logo" />
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
          <a href="/login">
              <i className="fa fa-user"></i>
          </a>
          <p>Profile</p>
            </div>
          <div className="icon">
            <a href="#req">
              <i className="fa fa-envelope"></i>
            </a>
            <p>Message</p>
          </div>
          <div className="icon">
            <a href="/list">
              <i className="fa fa-heart"></i>
            </a>
            <p>Orders</p>
          </div>
          <div className="icon">
            <a href="/cart">
              <i className="fa fa-shopping-cart"></i>
            </a>
            <p>Cart</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav_bar" id="user">
        <a className="nav_item" onClick={catagorybar}>
          <i className="fa fa-list"></i> All catagory
        </a>
        <a className="nav_item" href="#offers">Hot offers</a>
        <a className="nav_item" href="/list">
          Product list
        </a>
        <a className="nav_item" href="/details">
          Product details
        </a>
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
          Ship to <img src="germany.png" width="30rem" alt="Germany" />
          <select className="dropdown" style={{ borderColor: 'white', fontSize: '0.9rem', width: '3rem' }}>
            <option></option>
            <option value="US">&#127466;&#127480;</option>
            <option value="AU">&#127462;&#127482;</option>
            <option value="CN">&#127462;&#127475;</option>
          </select>
        </a>
      </nav>

      {/* Main Section */}
      <div className="section_main">
        <div className="main_menu">
          <a href="#">
            <li style={{ color: 'rgb(8, 8, 8)', backgroundColor: 'rgb(222, 247, 250)' }}>
              Automobiles
            </li>
          </a>
          <a href="/details">
            <li>Clothes and wear</li>
          </a>
          <a href="#">
            <li>Home interior</li>
          </a>
          <a href="/list">
            <li>Computer and tech</li>
          </a>
          <a href="/list">
            <li>Tools, equipment</li>
          </a>
          <a href="#">
            <li>Sports and outdoor</li>
          </a>
          <a href="#">
            <li>Animal and pets</li>
          </a>
          <a href="#">
            <li>Machinery tools</li>
          </a>
          <a href="#">
            <li>More catagory</li>
          </a>
        </div>
        <div>
          <img src="main11.png" alt="Main" />
          <h2>
            Latest trending
            <br />
            <b>Electronic items</b>
          </h2>
          <button className="learn-btn">Learn more</button>
        </div>
        <div className="tags">
          <div className="user">
            <div>
              <i className="fa fa-user-circle"></i>
              <h3>
                Hi, user
                <br />
                let's get started
              </h3>
            </div>
            <a href='/register'><button className="join-btn">Join now</button></a> 
            <a href='/login'><button className="login-btn">Log in</button></a> 
            <div className="slide1">
              Get US $10 off
              <br /> with a new <br /> supplier
            </div>
            <div className="slide2">
              Send quotes with
              <br /> supplier
              <br /> preferences
            </div>
          </div>
        </div>
      </div>

      {/* Deals Section */}
      <div className="deals-section" id="offers">
        <div className="deals">
          <h2>Deals and offers</h2>
          <p>Hygiene equipments</p>
          <div className="time">
            <p>
              07
              <br />
              <span>Days</span>
            </p>
            <p>
              13
              <br />
              <span>Hour</span>
            </p>
            <p>
              36
              <br />
              <span>Min</span>
            </p>
            <p>
              20
              <br />
              <span>Sec</span>
            </p>
          </div>
        </div>
        <div className="deal-slideC">
          <div className="deal-slides">
            <div className="card">
              <a href="/list">
                <img src="t8.jpg" className="c-img" alt="Smart watches" />
                <div className="card-body">
                  <h5 className="card-title">Smart watches</h5>
                  <p className="card-text">-25%</p>
                </div>
              </a>
            </div>
          </div>
          <div className="deal-slides">
            <div className="card">
              <a href="/list">
                <img src="t7.jpg" className="c-img" alt="Laptops" />
                <div className="card-body">
                  <h5 className="card-title">Laptops</h5>
                  <p className="card-text">-25%</p>
                </div>
              </a>
            </div>
          </div>
          <div className="deal-slides">
            <div className="card">
              <a href="/list">
                <img src="t6.jpg" className="c-img" alt="GoPro Camera" />
                <div className="card-body">
                  <h5 className="card-title">GoPro Camera</h5>
                  <p className="card-text">-25%</p>
                </div>
              </a>
            </div>
          </div>
          <div className="deal-slides">
            <div className="card">
              <a href="/list">
                <img src="t5.jpg" className="c-img" alt="Headphones" />
                <div className="card-body">
                  <h5 className="card-title">Headphones</h5>
                  <p className="card-text">-25%</p>
                </div>
              </a>
            </div>
          </div>
          <div className="deal-slides" style={{ borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem" }}>
            <div className="card">
              <a href="/list">
                <img src="t1.jpg" className="c-img" alt="Smart phones" />
                <div className="card-body">
                  <h5 className="card-title">Smart phones</h5>
                  <p className="card-text">-25%</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Outdoor Section */}
      <div className="outdoor_container">
        <div className="outdoor">
          <img src="image92.png" alt="Outdoor" />
          <h2>
            Home and
            <br /> outdoor
          </h2>
          <button className="source-btn">Source nows</button>
        </div>
        <div className="outdoor-slideC">
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="i4.jpg" className="c-img" alt="Flask" />
                <div className="card-body">
                  <h5 className="card-title">Flask</h5>
                  <p className="card-text">From USD 19</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="i5.jpg" className="c-img" alt="Mattress" />
                <div className="card-body">
                  <h5 className="card-title">Mattress</h5>
                  <p className="card-text">From USD 25</p>
                </div>
              </a>
            </div>
          </div>
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="i6.jpg" className="c-img" alt="Lamp" />
                <div className="card-body">
                  <h5 className="card-title">Lamp</h5>
                  <p className="card-text">From USD 20</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="i8.jpg" className="c-img" alt="Home appliance" />
                <div className="card-body">
                  <h5 className="card-title">Home appliance</h5>
                  <p className="card-text">From USD 30</p>
                </div>
              </a>
            </div>
          </div>
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="i7.jpg" className="c-img" alt="Home appliance" />
                <div className="card-body">
                  <h5 className="card-title">Home appliance</h5>
                  <p className="card-text">From USD 35</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="i5.jpg" className="c-img" alt="Mattress" />
                <div className="card-body">
                  <h5 className="card-title">Mattress</h5>
                  <p className="card-text">From USD 30</p>
                </div>
              </a>
            </div>
          </div>
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="i9.jpg" className="c-img" alt="Appliance" />
                <div className="card-body">
                  <h5 className="card-title">Appliance</h5>
                  <p className="card-text">From USD 25</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="i1.jpg" className="c-img" alt="Soft chairs" />
                <div className="card-body">
                  <h5 className="card-title">Soft chairs</h5>
                  <p className="card-text">From USD 20</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Consumer Electronics Section */}
      <div className="outdoor_container">
        <div className="outdoor">
          <img src="image98.png" alt="Consumer Electronics" />
          <h2>
            Consumer
            <br /> electronics and
            <br /> gadgets
          </h2>
          <button className="source-btn">Source nows</button>
        </div>
        <div className="outdoor-slideC">
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="t1.jpg" className="c-img" alt="SmartPhones" />
                <div className="card-body">
                  <h5 className="card-title">SmartPhones</h5>
                  <p className="card-text">From USD 25</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="t10.jpg" className="c-img" alt="Electric kattele" />
                <div className="card-body">
                  <h5 className="card-title">Electric kattele</h5>
                  <p className="card-text">From USD 30</p>
                </div>
              </a>
            </div>
          </div>
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="t2.jpg" className="c-img" alt="SmartPhones" />
                <div className="card-body">
                  <h5 className="card-title">SmartPhones</h5>
                  <p className="card-text">From USD 10</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="t5.jpg" className="c-img" alt="Head Phones" />
                <div className="card-body">
                  <h5 className="card-title">Head Phones</h5>
                  <p className="card-text">From USD 19</p>
                </div>
              </a>
            </div>
          </div>
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="t7.jpg" className="c-img" alt="Laptops" />
                <div className="card-body">
                  <h5 className="card-title">Laptops</h5>
                  <p className="card-text">From USD 40</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="#">
                <img src="t8.jpg" className="c-img" alt="Smart watches" />
                <div className="card-body">
                  <h5 className="card-title">Smart watches</h5>
                  <p className="card-text">From USD 20</p>
                </div>
              </a>
            </div>
          </div>
          <div className="outdoor-slides">
            <div className="card">
              <a href="#">
                <img src="t6.jpg" className="c-img" alt="Camera" />
                <div className="card-body">
                  <h5 className="card-title">Camera</h5>
                  <p className="card-text">From USD 19</p>
                </div>
              </a>
            </div>
            <div className="card" id="req">
              <a href="#">
                <img src="t4.jpg" className="c-img" alt="SmartPhones" />
                <div className="card-body">
                  <h5 className="card-title">SmartPhones</h5>
                  <p className="card-text">From USD 25</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Supplement Request Section */}
      <div className="supp-req">
        <div>
          <img src="image102.png" alt="Supplier Request" />
        </div>
        <div className="head">
          <h1>
            An easy way to send
            <br /> requests to all suppliers
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label className="heading2">Send quote to suppliers</label>
          </div>
          <div className="form-group">
            <label className="question">What items you need?</label>
          </div>
          <div className="form-group">
            <textarea id="details" name="details" placeholder="Type more details"></textarea>
          </div>
          <div className="form-group">
            <div className="select">
              <label className="quantity">Quantity</label>
              <select className="dropdown" style={{ border: '0.09rem solid rgb(209, 209, 209)', marginLeft: '0.5rem', width: '7rem', height: '2.2rem' }}>
                <option>Pcs</option>
                <option>1</option>
                <option>3</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Send inquiry</button>
          </div>
        </div>
      </div>

      {/* Recommended Items Section */}
      <h2 className="heading1">Recommended items</h2>
      <div className="section-recommended">
        <div className="card">
          <a href="#">
            <img src="c1.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$10.30</h5>
            <p className="card-text">Blue high quality T-Shirt</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="t4.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$10.20</h5>
            <p className="card-text">Smartphone in low prices</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="c3.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$20.30</h5>
            <p className="card-text">Brown jacket for winters</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="i2.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$30.10</h5>
            <p className="card-text">Comfortable and premium quality chair</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="c6.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$5.10</h5>
            <p className="card-text">Blue wallet for men</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="i6.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$20.30</h5>
            <p className="card-text">Low price lamp</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="t5.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$20.20</h5>
            <p className="card-text">Expensive blue headphones</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="c5.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$20.10</h5>
            <p className="card-text">High quality blue bag</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="c7.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$20.10</h5>
            <p className="card-text">Premium suit for men</p>
          </div>
        </div>
        <div className="card">
          <a href="#">
            <img src="c4.jpg" className="card-img-top" alt="Product" />
          </a>
          <div className="card-body">
            <h5 className="card-title">$10.30</h5>
            <p className="card-text">Original high quality blue jeans</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <h2>Our extra services</h2>
        <div className="service-tag">
          <div className="sr-tag">
            <a href="#">
              <img src="image108.png" className="card-img-top" alt="Service" />
            </a>
            <div className="card-body">
              <p className="card-text">Source from<br /> Industry Hubs</p>
            </div>
          </div>
          <div className="sr-tag">
            <a href="#">
              <img src="image104.png" className="card-img-top" alt="Service" />
            </a>
            <div className="card-body">
              <p className="card-text">Customize Your<br /> Products</p>
            </div>
          </div>
          <div className="sr-tag">
            <a href="#">
              <img src="image106.png" className="card-img-top" alt="Service" />
            </a>
            <div className="card-body">
              <p className="card-text">Fast, reliable shipping<br /> by ocean or air</p>
            </div>
          </div>
          <div className="sr-tag">
            <a href="#">
              <img src="image107.png" className="card-img-top" alt="Service" />
            </a>
            <div className="card-body">
              <p className="card-text">Product monitoring<br /> and inspection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Scale */}
      <div className="Section-scale">
        <img src="Section-country.png" alt="Section scale" />
      </div>

      {/* Newsletter Section */}
      <div className="news-letter">
        <h2>
          <b> Subscribe on our newsletter </b>
        </h2>
        <p>
          Get daily news on upcomming offers from many supplier all over the world
        </p>
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
              <img src="logo-colored.svg" alt="Logo" />
            </div>
            <p>
              Best information about the company goes here but now lorem ipsum is
            </p>
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
                <img className="img1" src="apple.png" alt="Apple" />
                <img className="img2" src="google.png" alt="Google" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Ecommerce.</p>
          <div className="language-selector">
            <img src="usa.png" alt="USA flag" />
            <span>English</span>
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hpage;
