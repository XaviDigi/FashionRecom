import React from 'react'

interface ProductRecommendation {
  name: string;
  brandName: string;
  imageUrl: string;
  price: {
    current: {
      value: number;
    };
  };
  category: string;
}

interface FashionRecommendationsProps {
  recommendations: ProductRecommendation[];
}

const FashionRecommendations: React.FC<FashionRecommendationsProps> = ({ recommendations }) => {
  const categories = ['Hat', 'Sunglasses', 'Top', 'Pants', 'Shoes']

  const formatPrice = (price: { current: { value: number } }) => {
    return `$${price.current.value.toFixed(2)}`
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-dark-brown">Personalized Fashion Recommendations</h2>
      <p className="text-red-600 font-bold mb-4">This is still in progress. The final version will be more accurate.</p>
      {recommendations.length > 0 ? (
        <div className="space-y-8">
          {categories.map((category, index) => {
            const item = recommendations.find(r => r.category === category)
            return item ? (
              <div key={index} className="bg-beige p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-dark-brown">{category}</h3>
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-32 h-32 object-cover rounded-md mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg text-dark-brown">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brandName}</p>
                    <p className="text-sm font-medium text-light-brown mt-1">{formatPrice(item.price)}</p>
                  </div>
                </div>
              </div>
            ) : null
          })}
        </div>
      ) : (
        <p className="text-gray-500">Upload a photo to get personalized fashion recommendations.</p>
      )}
    </div>
  )
}

export default FashionRecommendations