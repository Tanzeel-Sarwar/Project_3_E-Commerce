export interface Product {
    id: number;
    name: string;
    price: number;
    color: string;
    image: string;
    description: string;
  }
  
  export  const products: Product[] = [
    { 
      id: 1, 
      name: 'Toyota Fortuner', 
      price: 9.99, 
      color: 'bg-black',
      image: '/images/car1.png',
      description: "A rugged and reliable SUV, the Toyota Fortuner blends off-road capability with on-road comfort, making it a top choice for adventure seekers."
    },
    { 
      id: 2, 
      name: 'Mahindra Thar', 
      price: 9.99, 
      color: 'bg-gray-700',
      image: '/images/car2.png',
      description: "Iconic, rugged, and ready for any terrain, the Mahindra Thar is a compact 4x4 that offers a thrilling driving experience both on and off the road."
    },
    { 
      id: 3, 
      name: 'Audi R8', 
      price: 9.99, 
      color: 'bg-gray-500',
      image: '/images/car3.png',
      description: "A supercar that combines striking design with raw performance, the Audi R8 delivers thrilling speed and precise handling with a luxurious touch."
    },
    { 
      id: 4, 
      name: 'G11 BMW 7 Series', 
      price: 9.99, 
      color: 'bg-gray-700',
      image: '/images/car4.png',
      description: "The G11 BMW 7 Series is a flagship luxury sedan, offering cutting-edge technology, exceptional comfort, and a refined driving experience."
    },
    { 
      id: 5, 
      name: 'Mercedes Benz AMG S63', 
      price: 9.99, 
      color: 'bg-gray-500',
      image: '/images/car5.png',
      description: "The AMG S63 is a high-performance luxury sedan that seamlessly blends power, precision, and opulence, delivering a top-tier driving experience."
    },
    { 
      id: 6, 
      name: 'Supra MK4', 
      price: 9.99, 
      color: 'bg-gray-700',
      image: '/images/car6.png',
      description: "A legendary icon from the 90s, the Supra MK4 is known for its robust performance, striking design, and tunability, making it a car enthusiast's dream."
    },
    { 
      id: 7, 
      name: 'Rolls Royce', 
      price: 9.99, 
      color: 'bg-gray-500',
      image: '/images/car7.png',
      description: "The epitome of luxury, Rolls-Royce offers unmatched craftsmanship, world-class comfort, and a smooth, serene driving experience fit for royalty."
    },
    { 
      id: 8, 
      name: 'Mustang', 
      price: 9.99, 
      color: 'bg-gray-700',
      image: '/images/car8.png',
      description: "An American muscle car icon, the Mustang delivers raw power, aggressive styling, and a thrilling ride, making it a favorite for performance enthusiasts."
    },
  ]
  
  