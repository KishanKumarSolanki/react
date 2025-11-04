import teddy from './assets/teddy.png';
import unicorn2 from './assets/unicorn2.png';
import lama from './assets/lama.png';
import miccy from './assets/miccy.png';
import stem from './assets/stem.png';
import puzzles from './assets/puzzles.png';
import math from './assets/math.png';
import counting from './assets/counting.png';
import bunny from './assets/bunny.png';
import dinosaur from './assets/dinosaur.png';
import penguin from './assets/penguin.png';
import magnetictiles from './assets/magnetictiles.png';
import mappuzzles from './assets/mappuzzles.jpg';
import rccar from './assets/rccar.png';
import rcHelicopter from './assets/rchelicopter.png';
import rcBoat from './assets/rcboat.png';
import rcjcb from './assets/rcjcb.png';
import rcMonsterTruck from './assets/rcmonstertruck.png';
import chess from './assets/chess.png';
import monopoly from './assets/monopoly.png';
import scrabble from './assets/scrabble.jpg';
import catan from './assets/catan.jpg';
import ride from './assets/ride.png';
import ludo from './assets/ludo.jpg';


 const items = [];
export const softToys = [
  {
    id: '1',
    title: 'Teddy Bear',
    description: 'The classic, beloved stuffed animal, typically made from soft, plush fabric.',
    image: teddy,
    details: 'This fluffy teddy bear is made from premium, hypoallergenic materials. It features reinforced stitching for durability and is perfect for all ages. Measuring 18 inches tall, it’s the ideal companion for cuddles and playtime. Available in a variety of colors.',
    price: 159.00,
    category: 'soft-toys'
  },
  {
    id: '2',
    title: 'Plush Unicorn',
    description: 'A mythical creature brought to life in soft toy form.',
    image: unicorn2,
    details: 'Bring magic into your home with this enchanting plush unicorn. Its shimmering horn and rainbow mane add a touch of sparkle. Crafted from a silky-soft fabric, this unicorn is designed to be both a toy and a beautiful decorative piece.',
    price: 190.00,
    category: 'soft-toys'
  },
  {
    id: '3',
    title: 'Stuffed Llama',
    description: 'These soft toys are inspired by the charming South American camelids.',
    image: lama,
    details: 'This adorable stuffed llama has a soft, shaggy coat and a friendly embroidered face. It stands on its own and is perfect for imaginative play. The perfect size for a child to carry around, it  a wonderful gift for any animal lover.',
    price: 249.00,
    category: 'soft-toys'
  },
  {
    id: '4',
    title: 'Disney\'s Mickey Mouse',
    description: 'These are soft toy versions of popular characters from movies, TV shows, video games, or books.',
    image: miccy,
    details: 'A classic character brought to life in a soft, huggable form. This Mickey Mouse plush is officially licensed and perfect for fans of all ages.',
    price: 169.00,
    category: 'soft-toys'
  },
  {
    id: '5',
    title: 'Fluffy Bunny',
    description: 'A cute and cuddly bunny with long, floppy ears and a soft, cotton tail.',
    image: bunny,
    details: 'Crafted from ultra-soft, short-pile plush, this bunny is perfect for snuggling. Its long, poseable ears and embroidered features make it safe for young children. This toy meets all safety standards and is machine washable for easy cleaning.',
    price: 189.00,
    category: 'soft-toys'
  },
  {
    id: '6',
    title: 'Giant Plush Dinosaur',
    description: 'A massive and friendly dinosaur, perfect for big hugs and epic adventures.',
    image: dinosaur,
    details: 'This oversized plush dinosaur features a vibrant green color and soft, sculpted horns. Standing at 36 inches, it doubles as a comfortable pillow or a fun room decoration. Made with eco-friendly fibers.',
    price: 399.00,
    category: 'soft-toys'
  },
  {
    id: '7',
    title: 'Little Penguin',
    description: 'A small, charming penguin with a weighted bottom so it can sit upright.',
    image: penguin,
    details: 'This little penguin is designed with a weighted base to sit perfectly on a shelf or desk. Its fuzzy exterior and shiny button eyes give it a playful look. A great gift for animal lovers.',
    price: 249.00,
    category: 'soft-toys'
  },

];
export const educationalToys = [ 
  
  {
    id: '1',
    title: 'STEM Kits',
    description: 'Focus on Science, Technology, Engineering, and Mathematics.',
    image: stem,
    details: 'An all-in-one kit to spark curiosity in STEM fields. Includes experiments for building circuits, learning basic coding, and understanding chemical reactions. Safe and engaging for young learners.',
    price: 199.00,
    category: 'educational-toys'
  },
  {
    id: '2',
    title: 'Puzzles',
    description: 'Develop problem-solving, logic, and hand-eye coordination.',
    image: puzzles,
    details: 'A set of colorful puzzles designed to challenge and entertain. Includes a variety of shapes and difficulty levels to grow with your child, improving spatial awareness and cognitive skills.',
    price: 149.00,
    category: 'educational-toys'
  },
  {
    id: '3',
    title: 'Building Blocks',
    description: 'Encourage creativity, problem-solving, and fine motor skills.',
    image: math,
    details: 'Classic wooden building blocks in various shapes and sizes. This set encourages imaginative play and helps develop fine motor skills and spatial reasoning.',
    price: 200.00,
    category: 'educational-toys'
  },
  {
    id: '4',
    title: 'Counting Toys',
    description: 'Help with number recognition, basic arithmetic, and logical thinking.',
    image: counting,
    details: 'A fun and interactive set of counting bears and sorting cups. This toy makes learning basic math concepts easy and enjoyable for children.',
    price: 249.00,
    category: 'educational-toys'
  },
  {
    id: '5',
    title: 'Magnetic Building Tiles',
    description: 'Colorful magnetic tiles for creative and open-ended construction play.',
    image: magnetictiles,
    details: 'This set of magnetic tiles helps children develop fine motor skills and spatial reasoning. The strong magnets allow for building complex 2D and 3D structures. The kit comes with a guide for various designs, from castles to geometric shapes.',
    price: 320.00,
    category: 'educational-toys'
  },
  {
    id: '6',
    title: 'India Map Puzzle',
    description: 'A large, floor-sized puzzle that teaches geography and India cultures.',
    image: mappuzzles,
    details: 'This 100-piece puzzle features beautifully illustrated continents, oceans, and landmarks. Each piece is large and durable, making it easy for little hands to assemble. It includes fun facts about each country to make learning geography a global adventure.',
    price: 280.00,
    category: 'educational-toys'
  },
];

export const rcToys = [
  {
    id: '1',
    title: 'Remote Control Car',
    description: 'A fast and fun remote control car for kids.',
    image: rccar,
    details: 'This remote control car features a sleek design and can reach speeds of up to 15 mph. It comes with a rechargeable battery and a user-friendly remote control.',
    price: 199.00,
    category: 'rc-toys'
  },
  {
    id: '2',
    title: 'RC Helicopter',
    description: 'A stable and easy-to-fly remote control helicopter.',
    image: rcHelicopter,
    details: 'This RC helicopter is perfect for beginners. It features a durable design and can be flown indoors or outdoors.',
    price: 249.00,
    category: 'rc-toys'
  },
  {
    id: '3',
    title: 'RC Boat',
    description: 'A high-speed remote control boat for water adventures.',
    image: rcBoat,
    details: 'This RC boat can reach speeds of up to 20 mph on water. It features a waterproof design and comes with a 2.4GHz remote control.',
    price: 299.00,
    category: 'rc-toys'
  },
  {
    id: '4',
    title: 'RC JCB',
    description: 'A powerful remote control JCB for construction fun.',
    image: rcjcb,
    details: 'This RC JCB features realistic movements and sounds. It can be controlled via a user-friendly remote and is perfect for indoor and outdoor play.',
    price: 399.00,
    category: 'rc-toys'
  },
  {
    id: '5',
    title: 'RC Monster Truck',
    description: 'A rugged remote control monster truck for off-road adventures.',
    image: rcMonsterTruck,
    details: 'This RC monster truck is built for tough terrain and can tackle any obstacle in its path. With large wheels and a powerful motor, it provides an exhilarating off-road experience.',
    price: 499.00,
    category: 'rc-toys'
  }
];

export const boardGames = [
  {
    id: '1',
    title: 'Chess Set',
    description: 'A classic chess set for strategic gameplay.',
    image: chess,
    details: 'This beautifully crafted chess set includes a wooden board and intricately designed pieces. Perfect for players of all ages.',
    price: 199.00,
    category: 'board-games'
  },
  {
    id: '2',
    title: 'Monopoly',
    description: 'A classic board game of buying and trading properties.',
    image: monopoly,
    details: 'This Monopoly set includes a game board, property cards, and play money. Perfect for family game nights.',
    price: 299.00,
    category: 'board-games'
  },
  {
    id: '3',
    title: 'Scrabble',
    description: 'A classic word game for crossword enthusiasts.',
    image: scrabble,
    details: 'This Scrabble set includes a game board, letter tiles, and scoring rules. Perfect for family game nights and improving vocabulary.',
    price: 249.00,
    category: 'board-games'
  },
  {
    id: '4',
    title: 'Catan',
    description: 'A popular board game about trading and building.',
    image: catan,
    details: 'In Catan, players collect resources and use them to build roads, settlements, and cities. The game involves strategy, negotiation, and a bit of luck.',
    price: 349.00,
    category: 'board-games'
  },
  {
    id: '5',
    title: 'Ticket to Ride',
    description: 'A railway-themed board game about building train routes.',
    image: ride,
    details: 'In Ticket to Ride, players collect train cards to claim railway routes on a map. The game is easy to learn but offers strategic depth.',
    price: 399.00,
    category: 'board-games'
  },
  {
    id: '6',
    title: 'Ludo',
    description: 'A classic board game for 2-4 players.',
    image: ludo,
    details: 'This Ludo set includes a colorful game board and four sets of playing pieces. The game is simple to learn and perfect for family fun.',
    price: 149.00,
    category: 'board-games'
  },

];

export default items;