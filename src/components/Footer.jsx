import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Tech Street</p>
            <p className="mb-2">Tech City, TC 12345</p>
            <p className="mb-2">Email: info@techcompany.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.725-.666 1.562-.666 2.457 0 1.694.863 3.188 2.175 4.065-.801-.026-1.555-.246-2.213-.614v.062c0 2.366 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0h-20.46c-.974 0-1.77.796-1.77 1.77v20.459c0 .974.796 1.771 1.77 1.771h20.459c.974 0 1.771-.797 1.771-1.771v-20.459c0-.974-.797-1.77-1.771-1.77zm-13.539 20.452h-3.077v-10.452h3.077v10.452zm-1.538-11.932c-.987 0-1.787-.8-1.787-1.787s.8-1.787 1.787-1.787 1.787.8 1.787 1.787-.8 1.787-1.787 1.787zm13.539 11.932h-3.077v-5.604c0-1.336-.027-3.057-1.863-3.057-1.863 0-2.149 1.454-2.149 2.957v5.704h-3.077v-10.452h2.951v1.428h.042c.411-.778 1.414-1.598 2.91-1.598 3.108 0 3.681 2.046 3.681 4.707v5.915z"/>
                </svg>
              </a>
              <a href="https://github.com" className="hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; 2023 Tech Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
