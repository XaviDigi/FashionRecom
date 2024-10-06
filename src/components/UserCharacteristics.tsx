import React, { useState } from 'react'

interface UserCharacteristicsProps {
  initialCharacteristics: {
    skinTone: string;
    hairColor: string;
    eyeColor: string;
  };
  onSubmit: (characteristics: {
    skinTone: string;
    hairColor: string;
    eyeColor: string;
  }) => void;
}

const UserCharacteristics: React.FC<UserCharacteristicsProps> = ({ initialCharacteristics, onSubmit }) => {
  const [characteristics, setCharacteristics] = useState(initialCharacteristics)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCharacteristics({
      ...characteristics,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(characteristics)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Your Characteristics</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="skinTone" className="block text-sm font-medium text-gray-700 mb-2">
            Skin Tone
          </label>
          <select
            id="skinTone"
            name="skinTone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={characteristics.skinTone}
            onChange={handleChange}
          >
            <option value="Fair">Fair</option>
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Olive">Olive</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <div>
          <label htmlFor="hairColor" className="block text-sm font-medium text-gray-700 mb-2">
            Hair Color
          </label>
          <select
            id="hairColor"
            name="hairColor"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={characteristics.hairColor}
            onChange={handleChange}
          >
            <option value="Blonde">Blonde</option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Gray">Gray</option>
          </select>
        </div>
        <div>
          <label htmlFor="eyeColor" className="block text-sm font-medium text-gray-700 mb-2">
            Eye Color
          </label>
          <select
            id="eyeColor"
            name="eyeColor"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={characteristics.eyeColor}
            onChange={handleChange}
          >
            <option value="Brown">Brown</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Hazel">Hazel</option>
            <option value="Gray">Gray</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Personalized Recommendations
      </button>
    </form>
  )
}

export default UserCharacteristics