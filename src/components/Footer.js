import React from 'react';
import "./main.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Categories</h3>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contacts</h3>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main St, City, Country</li>
          {/* Add more contact information as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
