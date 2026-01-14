import { Catalog } from './types';

export const CATALOGS: Catalog[] = [
  {
    title: 'PERFUME CATALOGUE',
    products: [
      { id: 'P1', name: 'MY WAY', image: 'https://i.pinimg.com/1200x/8e/71/ec/8e71ec20e102fce96171a8d1522ecaef.jpg', topPrice: 100000, percentage: 20, bottomPrice: 120000, badge: 'A', description: 'Floral bouquet.' },
      { id: 'P2', name: 'ACQUA DI GIOIA', image: 'https://i.pinimg.com/1200x/f9/be/75/f9be75a03cec5e03d9ac9e3191676e94.jpg', topPrice: 300000, percentage: 20, bottomPrice: 360000, badge: 'B', description: 'Aquatic saltiness.' },
      { id: 'P3', name: 'ACQUA DI GIO', image: 'https://i.pinimg.com/736x/ea/91/d0/ea91d0ed6e8d50a2a4a1c0575d2f90f2.jpg', topPrice: 500000, percentage: 20, bottomPrice: 600000, badge: 'C', description: 'Woody marine.' },
      { id: 'P4', name: 'SI', image: 'https://i.pinimg.com/1200x/97/0a/b4/970ab4cf14c76cb446465ce7f16da781.jpg', topPrice: 800000, percentage: 20, bottomPrice: 960000, badge: 'D', description: 'Fruity rose.' },
    ]
  },
  {
    title: 'MAKEUP CATALOGUE',
    products: [
      { id: 'M1', name: 'Luminous Silk Foundation', image: 'https://i.pinimg.com/736x/c2/f8/07/c2f807a8139da47acf55918677c051c5.jpg', topPrice: 600000, percentage: 20, bottomPrice: 720000, badge: 'A', description: 'Foundation.' },
      { id: 'M2', name: 'Beauty Skin Tint Tinted Serum', image: 'https://i.pinimg.com/1200x/0f/93/a6/0f93a6af72b77a066747544983e96419.jpg', topPrice: 900000, percentage: 20, bottomPrice: 1080000, badge: 'B', description: 'Liquid lipstick.' },
      { id: 'M3', name: 'Luminous Silk Glow Fusion Powder', image: 'https://i.pinimg.com/1200x/1e/0a/fc/1e0afc630a846c3427c93d4b2cfd763a.jpg', topPrice: 1550000, percentage: 20, bottomPrice: 1860000, badge: 'C', description: 'Mascara.' },
      { id: 'M4', name: 'Lip Maestro Satin Nude Mania', image: 'https://i.pinimg.com/1200x/0e/0e/a4/0e0ea46fb0750da20a242ebad76e3754.jpg', topPrice: 2150000, percentage: 20, bottomPrice: 2580000, badge: 'D', description: 'Blush.' },
    ]
  },
  {
    title: 'ACCESSORIES CATALOGUE',
    products: [
      { id: 'AC1', name: 'key chain', image: 'https://di2ponv0v5otw.cloudfront.net/posts/2024/01/20/65abcc8c678c3a6d6f9cd33c/s_65abccd397b5d01d8b4c0c83.jpg', topPrice: 880000, percentage: 20, bottomPrice: 1056000, badge: 'A', description: 'Patterned silk.' },
      { id: 'AC2', name: 'White Hats For Men', image: 'https://static.mercdn.net/item/detail/orig/photos/m22236428115_1.jpg?1710575729', topPrice: 1000000, percentage: 20, bottomPrice: 1200000, badge: 'B', description: 'Calfskin belt.' },
      { id: 'AC3', name: 'Travel Pouch', image: 'https://di2ponv0v5otw.cloudfront.net/posts/2022/03/17/62342851cb692c32f15f96f5/m_623428d781a36c0ecec9f5b3.jpg', topPrice: 1800000, percentage: 30, bottomPrice: 2340000, badge: 'C', description: 'Aviator style.' },
      { id: 'AC4', name: 'Armani West Belt', image: 'https://images.hyperinzerce.cz/inzeraty/4583045571088433636/original/11804652-armani-elegantni-pasek-001.jpg', topPrice: 2500000, percentage: 30, bottomPrice: 3250000, badge: 'D', description: 'Bifold wallet.' },
    ]
  },
  {
    title: 'BAG’S CATALOGUE',
    products: [
      { id: 'B1', name: 'La Prima wicker and leather shoulder bag', image: 'https://di2ponv0v5otw.cloudfront.net/posts/2024/01/20/65abcc8c678c3a6d6f9cd33c/s_65abccd397b5d01d8b4c0c83.jpg', topPrice: 1500000, percentage: 20, bottomPrice: 1800000, badge: 'A', description: 'Shoulder bag.' },
      { id: 'B2', name: 'Efflorescence Gold Embellished Women\'s Bag', image: 'https://i.pinimg.com/1200x/36/7c/0a/367c0af1310add14ed787ab3d4a393cb.jpg', topPrice: 2000000, percentage: 20, bottomPrice: 2400000, badge: 'B', description: 'Large tote.' },
      { id: 'B3', name: 'Pre-Fall 2020', image: 'https://i.pinimg.com/736x/8c/49/1e/8c491e6cc484a867f95651abf02b7f57.jpg', topPrice: 3100000, percentage: 30, bottomPrice: 4030000, badge: 'C', description: 'Evening clutch.' },
      { id: 'B4', name: 'Britt Neutrals Canvas', image: 'https://i.pinimg.com/1200x/f1/de/5b/f1de5b4664b11910695551193e8b9178.jpg', topPrice: 4800000, percentage: 30, bottomPrice: 6240000, badge: 'D', description: 'Everyday bag.' },
    ]
  },
  {
    title: 'WATCH CATALOGUE',
    products: [
      { id: 'W1', name: 'Emporio Armani AR11688', image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/974ac287-5c55-436b-9c46-a487c92cafdf.__CR0,0,800,600_PT0_SX800_V1___.jpg', topPrice: 3300000, percentage: 30, bottomPrice: 4290000, badge: 'A', description: 'Stainless steel.' },
      { id: 'W2', name: 'Armani Exchange Hampton AX2144', image: 'https://i.pinimg.com/1200x/69/85/13/698513a55b4674679a024c2d5957c45a.jpg', topPrice: 4500000, percentage: 30, bottomPrice: 5850000, badge: 'B', description: 'Swiss movement.' },
      { id: 'W3', name: 'Emporio Armani Automatic Men\'s Watch AR60007', image: 'https://i.pinimg.com/1200x/d4/fa/5e/d4fa5e5e56630a378621b80e583b9f3b.jpg', topPrice: 5250000, percentage: 40, bottomPrice: 7350000, badge: 'C', description: '18K Gold.' },
      { id: 'W4', name: 'Armani Exchange Men\'s Watch AX2104', image: 'https://i.pinimg.com/1200x/69/85/13/698513a55b4674679a024c2d5957c45a.jpg', topPrice: 6100000, percentage: 40, bottomPrice: 8540000, badge: 'D', description: 'Waterproof.' },
    ]
  },
  {
    title: 'SHOES CATALOGUE',
    products: [
      { id: 'S1', name: 'Armani Exchange Leather Sneakers', image: 'https://i.pinimg.com/736x/48/f2/88/48f288f2c93a5d63f02d3080d1ef54b8.jpg', topPrice: 2580000, percentage: 30, bottomPrice: 3354000, badge: 'A', description: 'Suede loafers.' },
      { id: 'S2', name: 'Chaussure Armani Scarpe 2019', image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/389401477/EN/XM/DE/9581609/armani-exchange-mens-shoes-500x500.jpg', topPrice: 3500000, percentage: 30, bottomPrice: 4550000, badge: 'B', description: 'Urban style.' },
      { id: 'S3', name: 'Uomo Armani Scarpe Armani Aj Emporio Armani Sneakers', image: 'https://img.lazcdn.com/g/p/0e4e24945adc87d1a1b49167d2eda070.jpg_720x720q80.jpg', topPrice: 4200000, percentage: 30, bottomPrice: 5460000, badge: 'C', description: 'Pointed toe.' },
      { id: 'S4', name: 'Emporio Armani Sneakers Armani Leather Trainers EA7', image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/444349225/EY/UU/HK/9581609/emporio-armani-shoes.jpg', topPrice: 5800000, percentage: 40, bottomPrice: 8120000, badge: 'D', description: 'Ankle boots.' },
    ]
  },
  {
    title: 'JEWELRY CATALOGUE',
    products: [
      { id: 'J1', name: 'Plated Ring Gold Armani Ring', image: 'https://a.rimg.com.tw/s6/683/84a/zqtnagud/5/53/22127614674259_937.jpg', topPrice: 300000, percentage: 30, bottomPrice: 390000, badge: 'A', description: 'Eternal band.' },
      { id: 'J2', name: 'Emporio Armani Ring for Men Fashion', image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/89d2e0e4-0958-4f6b-9fba-4853af1054ce.__CR0,0,600,450_PT0_SX600_V1___.jpg', topPrice: 500000, percentage: 30, bottomPrice: 650000, badge: 'B', description: 'Pendant chain.' },
      { id: 'J3', name: 'Gold fashion bracelet', image: 'https://dreamsjewellery.com/wp-content/uploads/2024/05/Armani-bracelet-03cly301_1062978.jpg', topPrice: 600000, percentage: 40, bottomPrice: 840000, badge: 'C', description: 'Drop earrings.' },
      { id: 'J4', name: 'Armani exquisite high-end love bracelet', image: 'https://img2.ygo.tw/images/20230928/armanisz/armanisz_2309281001/armanisz_2309281001_9.jpg', topPrice: 800000, percentage: 40, bottomPrice: 1120000, badge: 'D', description: 'Cuff design.' },
    ]
  },
  {
    title: 'SPECIAL CATALOGUE',
    products: [
      { id: 'SP1', name: 'Couple\'s Chronograph Watches Black', image: 'https://dealpoint.pk/wp-content/uploads/2024/08/Couple-Chronograph-Watches-1.jpg', topPrice: 8000000, percentage: 50, bottomPrice: 12000000, badge: 'A', description: 'Anniversary set.' },
      { id: 'SP2', name: 'Couple\'s Chronograph Watches chocolate', image: 'https://www.bkmart.com.pk/wp-content/uploads/2025/07/1753725860275.jpg', topPrice: 10800000, percentage: 50, bottomPrice: 16200000, badge: 'B', description: 'Bespoke piece.' },
      { id: 'SP3', name: 'Couple\'s Chronograph Watches Gray', image: 'https://www.bkmart.com.pk/wp-content/uploads/2025/07/1753725860779-700x646.jpg', topPrice: 18500000, percentage: 50, bottomPrice: 27750000, badge: 'C', description: 'High fashion.' },
      { id: 'SP4', name: 'Analog New Emporio Armani Couple Watch', image: 'https://5.imimg.com/data5/ANDROID/Default/2021/9/IR/PV/WJ/30319864/product-jpeg-500x500.jpg', topPrice: 25250000, percentage: 50, bottomPrice: 37875000, badge: 'D', description: 'Classic trunk.' },
    ]
  }
];

export const SYSTEM_INSTRUCTION = `You are an expert luxury fragrance and fashion consultant for Giorgio Armani. 
You help customers choose the perfect product across our 8 main catalogues: Perfumes, Makeup, Accessories, Bags, Watches, Shoes, Jewelry, and Special editions.
Be elegant, sophisticated, and knowledgeable.
Keep your responses concise and high-end.`;