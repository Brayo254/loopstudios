import React from "react";

const CreationCard = ({ item }) => {
  return (
    <div className="group relative h-60 overflow-hidden md:h-80">
      {/* Mobile Image - Always visible on mobile, hidden on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${item.imageMobile})` }}
      ></div>

      {/* Desktop Image - Hidden on mobile, visible on desktop */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center transition-all duration-500 group-hover:scale-110 md:block"
        style={{ backgroundImage: `url(${item.imageDesktop})` }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

      {/* Title positioned at bottom */}
      <h3 className="absolute bottom-6 left-6 text-white font-bold text-2xl md:text-3xl">
        {item.title}
      </h3>
    </div>
  );
};

export default CreationCard;
