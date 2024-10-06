import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-beige min-h-screen">
      <h1 className="text-4xl font-extrabold text-brown mb-8 text-center">
        About Personalized Fashion Stylist
      </h1>
      <div className="bg-white dark:bg-gray-200 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <p className="mb-6 text-lg leading-loose text-gray-800">
          Welcome to <span className="font-bold text-brown">Personalized Fashion Stylist</span>, where
          technology meets style to create a truly unique shopping experience. Our innovative platform
          is designed to revolutionize the way you discover and choose your perfect outfits.
        </p>
        <p className="mb-6 text-lg leading-loose text-gray-800">
          Imagine having a personal stylist who understands your unique features and preferences,
          available at your fingertips 24/7. That's exactly what we offer through our cutting-edge
          AI technology. By analyzing your physical characteristics—your skin tone, hair, and eye color—
          we curate fashion recommendations that enhance your natural beauty.
        </p>
        <p className="mb-6 text-lg leading-loose text-gray-800">
          For clothing companies, we provide a powerful tool to connect with your target audience
          more effectively. By offering personalized recommendations, we increase the likelihood
          of successful purchases, improving customer satisfaction and loyalty.
        </p>
        <p className="mb-6 text-lg leading-loose text-gray-800">
          Our mission is to simplify and elevate your shopping experience. We believe that when
          you look good, you feel good—and we're here to help you achieve that effortlessly.
        </p>
        <p className="text-lg leading-loose text-gray-800">
          Join us in redefining the future of fashion retail. Experience the joy of discovering clothes
          perfectly suited to you, and step into a world where your personal style is celebrated.
        </p>
      </div>
    </div>
  );
}

export default About;
