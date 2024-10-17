"use client"
import { useState } from "react";

export default function TruncatedText({ text, maxLength = 100 }) {
  const [isTruncated, setIsTruncated] = useState(true);

  // Manejar clic para leer más o menos
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="text-container">
      {/* Texto truncado si isTruncated es true */}
      <p className={ `whitespace-normal text-white ${isTruncated ? 'truncate' : ''}`}>
        {isTruncated ? text.slice(0, maxLength) + "..." : text}
      </p>

      {/* Botón de Leer más o menos */}
      <button
        onClick={toggleTruncate}
        className="text-accent focus:outline-none mt-2"
      >
        {isTruncated ? "Leer más" : "Leer menos"}
      </button>
    </div>
  );
}
