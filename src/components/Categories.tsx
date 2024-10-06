import React from 'react'

const categories = [
  'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Shoes', 'Accessories',
  'Activewear', 'Swimwear', 'Lingerie', 'Sleepwear', 'Plus Size', 'Maternity',
  'Pants', 'Shoes'
]

const Categories: React.FC = () => {
  return (
    <aside className="w-64 bg-beige p-4">
      <h2 className="text-xl font-semibold mb-4 text-dark-brown">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#" className="text-light-brown hover:text-dark-brown transition-colors">{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Categories