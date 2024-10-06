import React from 'react'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-beige min-h-screen">
      <h1 className="text-3xl font-bold text-dark-brown mb-6">Contact Us</h1>
      <div className="bg-white dark:bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2" />
              123 Fashion Street, Shibuya, Tokyo 150-0002, Japan
            </p>
            <p className="flex items-center mb-2">
              <Mail className="mr-2" />
              xaviedigi@gmail.com
            </p>
            <p className="flex items-center mb-2">
              <Phone className="mr-2" />
              +81 3-1234-5678
            </p>
            <p className="flex items-center">
              <Clock className="mr-2" />
              Monday - Friday: 9:00 AM - 6:00 PM (JST)
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.70071631525872!3d35.66047388019891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca7c2087f63%3A0x6a1eb1b5a9b18bc9!2sShibuya%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact