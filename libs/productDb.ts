const productData = [
  {
    id: 1,
    name: "Fresh Orange",
    image: "https://media.istockphoto.com/id/2124102567/photo/orange-fruit-with-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=YUa-SHN1YnyS7wYTx33M59e-FJUUmiFNcWMNO2o4ats=",
    price: 2.99,
    oldPrice: 3.49,
    description: "Juicy and sweet oranges, packed with vitamin C to boost your immunity. Perfect for a healthy snack or fresh juice. Handpicked for freshness and quality. A great choice to start your day.",
    rating: "4.8",
    stockStatus: "In Stock"
  },
  {
    id: 2,
    name: "Red Apple",
    image: "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KkV1NhDBE6ITWxiiWJ7fOgK4ahT_sbs3u3S2UfzFQcE=",
    price: 1.99,
    oldPrice: 2.49,
    description: "Crisp and delicious red apples, full of natural sweetness. Perfect for snacking or adding to salads and desserts. Rich in fiber and essential nutrients. A healthy treat for any time of the day.",
    rating: "4.7",
    stockStatus: "In Stock"
  },
  {
    id: 3,
    name: "Banana Bunch",
    image: "https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y_aG0-O7ncSbd0PojxBl3zlih_gSYW4w62xsakcb6qs=",
    price: 0.99,
    oldPrice: 1.29,
    description: "Fresh and ripe bananas with a creamy texture and natural sweetness. Ideal for snacking, smoothies, or baking. Packed with potassium and energy to keep you active. A versatile fruit for every occasion.",
    rating: "4.6",
    stockStatus: "Out of Stock"
  },
  {
    id: 4,
    name: "Green Grapes",
    image: "https://media.istockphoto.com/id/172304886/photo/bunch-of-green-grapes-laying.webp?a=1&b=1&s=612x612&w=0&k=20&c=lY4YUFV3JCPBbv59aw1_Hz4yWilBEC3IYjIUNCLrOyw=",
    price: 2.49,
    oldPrice: 3.00,
    description: "Seedless green grapes with a refreshing taste and natural sweetness. Great for snacking, adding to fruit salads, or enjoying with cheese. Packed with antioxidants for a healthy lifestyle.",
    rating: "4.9",
    stockStatus: "In Stock"
  },
  {
    id: 5,
    name: "Strawberries",
    image: "https://media.istockphoto.com/id/1443197738/photo/strawberries-isolated-strawberry-slice-and-whole-berry-isolate-two-strawberries-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=7V0YiV_nYIJNJ2ubjqdMGYBQydhLK0JMHTB-5pq8pa0=",
    price: 3.99,
    oldPrice: 4.99,
    description: "Fresh and sweet strawberries, bursting with flavor. Perfect for desserts, smoothies, or as a healthy snack. Packed with vitamins and antioxidants to keep you refreshed and energized.",
    rating: "4.8",
    stockStatus: "Out of Stock"
  },
  {
    id: 6,
    name: "Watermelon Slice",
    image: "https://media.istockphoto.com/id/181051974/photo/fresh-slices-of-watermelon.webp?a=1&b=1&s=612x612&w=0&k=20&c=x27Zx0nw2DdFK-FtkYgjWF3HFwqr5FBuFWzePnB6Pa4=",
    price: 1.99,
    oldPrice: 2.49,
    description: "Refreshing and juicy watermelon slices for a hydrating treat. Perfect for summer days or as a dessert. Rich in natural sweetness and loaded with essential nutrients. A favorite for all ages.",
    rating: "4.7",
    stockStatus: "In Stock"
  },
  {
    id: 7,
    name: "Pineapple",
    image: "https://media.istockphoto.com/id/1497639521/photo/ripe-pineapple-is-tropical-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=CbsnU075NPRPGzOxlrqAEb0gP7o4U5aZ-cV1qjBrGVw=",
    price: 3.49,
    oldPrice: 4.00,
    description: "Tropical and tangy pineapples, freshly picked for quality. Great for snacking, juicing, or adding to dishes. Packed with vitamin C and unique enzymes for healthy digestion.",
    rating: "4.6",
    stockStatus: "In Stock"
  },
  {
    id: 8,
    name: "Mango",
    image: "https://media.istockphoto.com/id/168278888/photo/fresh-slices-of-mango-on-a-bed-of-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=yr6EiJ0XruGksZEmpMaz99BYwE-TU9xXzeWZ-NQAcAY=",
    price: 2.99,
    oldPrice: 3.49,
    description: "Ripe and flavorful mangoes, a tropical delight in every bite. Perfect for snacking, smoothies, or desserts. Packed with vitamins and a burst of natural sweetness. A must-have summer fruit.",
    rating: "4.9",
    stockStatus: "Out of Stock"
  },
  {
    id: 9,
    name: "Blueberries",
    image: "https://media.istockphoto.com/id/2029226867/photo/blueberry-isolated-blueberries-top-view-blueberry-flat-lay-on-white-background-with-clipping.webp?a=1&b=1&s=612x612&w=0&k=20&c=mx1Mf96hIlQBZCaWG3snTPGMK8k4gupkDcwfkB4hDy4=",
    price: 4.49,
    oldPrice: 5.49,
    description: "Sweet and tangy blueberries, packed with antioxidants. Ideal for baking, smoothies, or snacking. A perfect balance of flavor and nutrition. Great for maintaining a healthy lifestyle.",
    rating: "4.8",
    stockStatus: "In Stock"
  },
  {
    id: 10,
    name: "Peach",
    image: "https://media.istockphoto.com/id/1393599686/photo/peach-fruit-one-cut-in-half-with-green-leaf.jpg?s=612x612&w=0&k=20&c=v542XUut1k4hkyAWVFcBrjo1Gr0O9Iu431J4ff8LO58=",
    price: 1.99,
    oldPrice: 2.49,
    description: "Juicy and tender peaches, bursting with flavor and sweetness. Great for snacking, baking, or adding to salads. Packed with vitamins and antioxidants for a healthy diet.",
    rating: "4.7",
    stockStatus: "In Stock"
  },
  {
    id: 11,
    name: "Avocado",
    image: "https://media.istockphoto.com/id/1482149278/photo/fresh-avocado-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=dPIMvHbAtZzVu9siofuaT7HEj6r0nVQhtRXyr3qjVk8=",
    price: 2.49,
    oldPrice: 3.00,
    description: "Creamy and nutritious avocados, freshly picked. Perfect for toast, salads, or guacamole. Packed with healthy fats and essential nutrients to support your well-being.",
    rating: "4.9",
    stockStatus: "In Stock"
  },
  {
    id: 12,
    name: "Papaya",
    image: "https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ImhIKKnO2P19HwNClKpQRQvNt4nWeMtgFxYTnKd7hTQ=",
    price: 2.99,
    oldPrice: 3.49,
    description: "Sweet and refreshing papayas, rich in vitamins and fiber. Great for digestion and maintaining a healthy lifestyle. Enjoy as a snack, in smoothies, or as part of a fruit salad.",
    rating: "4.8",
    stockStatus: "Out of Stock"
  }
];

export default productData;
