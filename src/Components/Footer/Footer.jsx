import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer mt-auto py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Navigation Section */}
          <div className="col-md-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/browse-popular" className="footer-link">Browse Popular</a></li>
              <li><a href="/browse-simulcasts" className="footer-link">Browse Simulcasts</a></li>
              <li><a href="/release-calendar" className="footer-link">Release Calendar</a></li>
              <li><a href="/news" className="footer-link">News</a></li>
              <li><a href="/games" className="footer-link">Games</a></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="col-md-3">
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <i className="fab fa-tiktok"></i> TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Section */}
          <div className="col-md-3">
            <h5>
              <i className="fas fa-crown"></i> VIP Membership
            </h5>
            <ul className="list-unstyled">
              <li><a href="/start-free-trial" className="footer-link">Start a Free Trial</a></li>
              <li><a href="/vip-benefits" className="footer-link">VIP Benefits</a></li>
              <li><a href="/redeem-gift-card" className="footer-link">Redeem Gift Card</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/terms-of-use" className="footer-link">Terms of Use</a></li>
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/adchoices" className="footer-link">AdChoices</a></li>
              <li><a href="/do-not-sell" className="footer-link">Do Not Sell or Share My Personal Information</a></li>
              <li><a href="/cookie-consent" className="footer-link">Cookie Consent Tool</a></li>
            </ul>
          </div>
        </div>

        {/* About & Support Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <h5>About & Support</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/about" className="footer-link">About</a></li>
              <li className="list-inline-item"><a href="/help-center" className="footer-link">Help Center</a></li>
              <li className="list-inline-item"><a href="/press-inquiries" className="footer-link">Press Inquiries</a></li>
              <li className="list-inline-item"><a href="/get-the-apps" className="footer-link">Get the Apps</a></li>
              <li className="list-inline-item"><a href="/jobs" className="footer-link">Jobs</a></li>
            </ul>
          </div>
        </div>

        {/* Account Section */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h5>Account</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/create-account" className="footer-link">Create Account</a></li>
              <li className="list-inline-item"><a href="/login" className="footer-link">Log In</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Anime Site. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;