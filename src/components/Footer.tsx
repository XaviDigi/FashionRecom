import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="header-footer-bg text-dark-brown p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Personalized Fashion Stylist</h3>
          <p className="text-sm">Elevate your style with AI-powered recommendations</p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <p className="mb-2">&copy; 2023 All rights reserved.</p>
          <a href="https://XaviDigi.com" target="_blank" rel="noopener noreferrer" className="text-light-brown hover:text-dark-brown transition-colors">
            XaviDigi.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer