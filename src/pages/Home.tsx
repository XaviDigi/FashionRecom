import React, { useState } from 'react'
import ImageUpload from '../components/ImageUpload'
import FashionRecommendations from '../components/FashionRecommendations'
import UserCharacteristics from '../components/UserCharacteristics'
import Categories from '../components/Categories'
import ImageLinks from '../components/ImageLinks'
import { getRecommendations } from '../services/clothingApi'

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

function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [characteristics, setCharacteristics] = useState<{
    skinTone: string;
    hairColor: string;
    eyeColor: string;
  } | null>(null)
  const [recommendations, setRecommendations] = useState<ProductRecommendation[]>([])

  const handleImageUpload = (image: string) => {
    setUploadedImage(image)
    setTimeout(() => {
      setCharacteristics({
        skinTone: 'Medium',
        hairColor: 'Brown',
        eyeColor: 'Brown'
      })
    }, 1500)
  }

  const handleCharacteristicsSubmit = async (userCharacteristics: {
    skinTone: string;
    hairColor: string;
    eyeColor: string;
  }) => {
    setCharacteristics(userCharacteristics)
    try {
      const apiRecommendations = await getRecommendations(userCharacteristics)
      setRecommendations(apiRecommendations)
    } catch (error) {
      console.error('Error getting recommendations:', error)
      setRecommendations([])
    }
  }

  return (
    <div className="flex">
      <ImageLinks />
      <div className="flex-grow bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <ImageUpload onUpload={handleImageUpload} />
          {characteristics && (
            <UserCharacteristics
              initialCharacteristics={characteristics}
              onSubmit={handleCharacteristicsSubmit}
            />
          )}
          <FashionRecommendations recommendations={recommendations} />
        </div>
      </div>
      <Categories />
    </div>
  )
}

export default Home