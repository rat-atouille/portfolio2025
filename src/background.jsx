
import React from 'react';

const BackgroundPage = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed relative flex items-center justify-center"
      style={{ backgroundImage: "url('assets/background.jpg')" }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

    </div>
  );
};

export default BackgroundPage;