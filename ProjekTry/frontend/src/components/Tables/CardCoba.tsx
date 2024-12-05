import React from "react";

const CardWithImage = () => {
  // URL gambar
  const imageUrl = "https://unsplash.com/photos/a-restaurant-with-tables-and-chairs-covered-in-blankets-05cDX4y2oJ8";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      {/* Gambar */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt="Card Image"
      />
      {/* Konten Card */}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-black dark:text-white">
          Judul Card
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Ini adalah deskripsi singkat tentang card ini. Anda dapat menambahkan
          teks sesuai kebutuhan.
        </p>
      </div>
      {/* Footer Card */}
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default CardWithImage;
