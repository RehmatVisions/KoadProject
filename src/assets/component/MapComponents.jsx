 import React from 'react';

const MapComponents = () => {
  return (
    <div 
      className="w-full h-[50vh] relative rounded-xl overflow-hidden shadow-md border border-gray-200"
      aria-label="Google Map showing Avenue Marina, New York"
    >
      <iframe
        title="Google Map - Avenue Marina, New York"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.788148742933!2d-74.01014202409089!3d40.71006293827745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17888a44db%3A0x5d6d967a49d6e499!2sAvenue%20Marina%2C%20New%20York%2C%20NY%2010027%2C%20USA!5e0!3m2!1sen!2s!4v1719451944372!5m2!1sen!2s"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 'none' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-hidden="false"
      />
    </div>
  );
};

export default MapComponents;