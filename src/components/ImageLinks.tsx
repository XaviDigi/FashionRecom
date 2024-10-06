import React from 'react'

const imageLinks = [
  { url: 'https://i.ibb.co/B4rY0Y8/Screenshot-2024-09-30-004553.png=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', alt: 'Xavi Stories' },
  { url: 'https://i.ibb.co/C5fV9hk/Screenshot-2024-10-06-233935.png" alt="Screenshot-2024-10-06-233935" border="0" /></a>=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', alt: 'XaviDigi' },
  { url: 'https://i.ibb.co/PW3dGRH/Screenshot-2024-10-06-234311.png" alt="Screenshot-2024-10-06-234311" border="0" /></a>=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80', alt: 'XaviShop' }
]

const ImageLinks: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Featured</h2>
      <div className="space-y-4">
        {imageLinks.map((link, index) => (
          <a key={index} href="#" className="block">
            <img src={link.url} alt={link.alt} className="w-full h-40 object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity" />
            <p className="mt-2 text-center text-sm text-gray-600">{link.alt}</p>
          </a>
        ))}
      </div>
    </aside>
  )
}

export default ImageLinks