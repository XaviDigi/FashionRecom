import React, { useState } from 'react'
import { Sun, MapPin, Calendar } from 'lucide-react'

interface ActivityInputProps {
  onSubmit: (activityDetails: string) => void
}

const ActivityInput: React.FC<ActivityInputProps> = ({ onSubmit }) => {
  const [activity, setActivity] = useState('')
  const [weather, setWeather] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const activityDetails = `${activity} in ${weather} weather at ${location} on ${date}`
    onSubmit(activityDetails)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-2">
          Activity
        </label>
        <input
          type="text"
          id="activity"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="e.g., Beach day, Hiking, Wedding"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="weather" className="block text-sm font-medium text-gray-700 mb-2">
            <Sun className="inline-block w-4 h-4 mr-1" /> Weather
          </label>
          <input
            type="text"
            id="weather"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Sunny, Rainy"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline-block w-4 h-4 mr-1" /> Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline-block w-4 h-4 mr-1" /> Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Recommendations
      </button>
    </form>
  )
}

export default ActivityInput