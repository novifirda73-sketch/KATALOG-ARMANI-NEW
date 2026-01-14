
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const formatPrice = (num: number) => {
    return `IDR ${num.toLocaleString('id-ID')}`;
  };

  return (
    <div className="flex flex-col border-r border-gray-300 last:border-r-0 h-full group">
      {/* Top Price - Menggunakan Bodoni Moda untuk kesan Elite */}
      <div className="py-5 text-center border-b border-gray-300 bg-white">
        <span className="text-[28px] font-bodoni font-black tracking-tight leading-none text-black">
          {formatPrice(product.topPrice)}
        </span>
      </div>

      {/* Image Area */}
      <div 
        className="relative flex-grow overflow-hidden bg-gray-50 cursor-pointer min-h-[220px]"
        onClick={onClick}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Badge - Top Left with Semi-transparent dark bg */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center text-[11px] font-bold backdrop-blur-[4px] border border-white/30">
          {product.badge}
        </div>
        
        {/* Overlay on hover to signal clickability */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white text-[11px] uppercase tracking-[0.3em] font-bold bg-black/60 px-4 py-2 rounded-sm backdrop-blur-md transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Discover
          </span>
        </div>
      </div>

      {/* Percentage */}
      <div className="py-3 text-center border-t border-gray-300 bg-white">
        <span className="text-xl font-bold tracking-[0.1em] text-gray-800">{product.percentage}%</span>
      </div>

      {/* Bottom Price - Menggunakan Bodoni Moda untuk kesan Elite */}
      <div className="py-5 text-center border-t border-gray-300 bg-white">
        <span className="text-[28px] font-bodoni font-black tracking-tight leading-none text-black">
          {formatPrice(product.bottomPrice)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
