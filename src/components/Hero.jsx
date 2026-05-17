import React from 'react';

const SLIDES = [
  { caption: 'Academic Excellence', sub: "Shaping tomorrow's leaders today" },
  { caption: 'Amidst Difficulties We Rise', sub: 'Our motto is our promise' },
  { caption: '94.5% Matric Pass Rate', sub: 'Class of 2025' },
];

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">{SLIDES[0].caption}</h1>
        <p className="text-xl text-green-100">{SLIDES[0].sub}</p>
      </div>
    </section>
  );
}
