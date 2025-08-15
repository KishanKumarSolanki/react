// data.js
// This file stores all of the product information in a structured array.
import teddy from '../assets/teddy.png';
import unicorn from '../assets/unicorn.jpg';
import lama from '../assets/lama.jpg';
import miccy from '../assets/miccy.png';
import stem from '../assets/stem.jpg';
import puzzles from '../assets/puzzles.jpg';
import math from '../assets/math.jpg';
import counting from '../assets/counting.jpg';

 const items = [
  // Soft Toys
  {
    id: '1',
    name: 'Teddy Bear',
    description: 'The classic, beloved stuffed animal, typically made from soft, plush fabric.',
    image: teddy,
    details: 'This fluffy teddy bear is made from premium, hypoallergenic materials. It features reinforced stitching for durability and is perfect for all ages. Measuring 18 inches tall, it’s the ideal companion for cuddles and playtime. Available in a variety of colors.',
    price: 25.00,
    category: 'soft-toys'
  },
  {
    id: '2',
    name: 'Plush Unicorn',
    description: 'A mythical creature brought to life in soft toy form.',
    image: unicorn,
    details: 'Bring magic into your home with this enchanting plush unicorn. Its shimmering horn and rainbow mane add a touch of sparkle. Crafted from a silky-soft fabric, this unicorn is designed to be both a toy and a beautiful decorative piece.',
    price: 35.00,
    category: 'soft-toys'
  },
  {
    id: '3',
    name: 'Stuffed Llama',
    description: 'These soft toys are inspired by the charming South American camelids.',
    image: lama,
    details: 'This adorable stuffed llama has a soft, shaggy coat and a friendly embroidered face. It stands on its own and is perfect for imaginative play. The perfect size for a child to carry around, it  a wonderful gift for any animal lover.',
    price: 22.00,
    category: 'soft-toys'
  },
  {
    id: '4',
    name: 'Disney\'s Mickey Mouse',
    description: 'These are soft toy versions of popular characters from movies, TV shows, video games, or books.',
    image: miccy,
    details: 'A classic character brought to life in a soft, huggable form. This Mickey Mouse plush is officially licensed and perfect for fans of all ages.',
    price: 19.00,
    category: 'soft-toys'
  },
  // Educational Toys
  {
    id: '5',
    name: 'STEM Kits',
    description: 'Focus on Science, Technology, Engineering, and Mathematics.',
    image: stem,
    details: 'An all-in-one kit to spark curiosity in STEM fields. Includes experiments for building circuits, learning basic coding, and understanding chemical reactions. Safe and engaging for young learners.',
    price: 49.00,
    category: 'educational-toys'
  },
  {
    id: '6',
    name: 'Puzzles',
    description: 'Develop problem-solving, logic, and hand-eye coordination.',
    image: puzzles,
    details: 'A set of colorful puzzles designed to challenge and entertain. Includes a variety of shapes and difficulty levels to grow with your child, improving spatial awareness and cognitive skills.',
    price: 15.00,
    category: 'educational-toys'
  },
  {
    id: '7',
    name: 'Building Blocks',
    description: 'Encourage creativity, problem-solving, and fine motor skills.',
    image: math,
    details: 'Classic wooden building blocks in various shapes and sizes. This set encourages imaginative play and helps develop fine motor skills and spatial reasoning.',
    price: 30.00,
    category: 'educational-toys'
  },
  {
    id: '8',
    name: 'Counting Toys',
    description: 'Help with number recognition, basic arithmetic, and logical thinking.',
    image: counting,
    details: 'A fun and interactive set of counting bears and sorting cups. This toy makes learning basic math concepts easy and enjoyable for children.',
    price: 20.00,
    category: 'educational-toys'
  },
];

export default items;
