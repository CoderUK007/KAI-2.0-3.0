import { Recipe } from '../types/Recipe';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Garlic Parmesan Pasta',
    description: 'A rich and creamy pasta dish with garlic and Parmesan cheese that comes together in just 20 minutes.',
    imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    calories: 450,
    cuisine: 'Italian',
    difficulty: 'Easy',
    tags: ['Pasta', 'Creamy', 'Quick', 'Vegetarian'],
    ingredients: [
      '8 oz fettuccine pasta',
      '2 tbsp olive oil',
      '4 cloves garlic, minced',
      '1 cup heavy cream',
      '1 cup grated Parmesan cheese',
      'Salt and black pepper to taste',
      '2 tbsp fresh parsley, chopped'
    ],
    instructions: [
      'Cook pasta according to package instructions until al dente. Reserve 1/2 cup pasta water before draining.',
      'In a large skillet, heat olive oil over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.',
      'Pour in heavy cream and bring to a simmer. Cook for 3-4 minutes until slightly thickened.',
      'Reduce heat to low and gradually stir in Parmesan cheese until melted and smooth.',
      'Add drained pasta to the sauce and toss to coat. If needed, add reserved pasta water to reach desired consistency.',
      'Season with salt and black pepper to taste. Garnish with fresh parsley before serving.'
    ],
    isFavorite: false
  },
  {
    id: '2',
    title: 'Honey Glazed Salmon',
    description: 'Tender salmon fillets with a sweet and savory honey glaze, perfect for a quick weeknight dinner.',
    imageUrl: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 380,
    cuisine: 'Asian',
    difficulty: 'Medium',
    tags: ['Seafood', 'Gluten-Free', 'High-Protein'],
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '3 tbsp honey',
      '2 tbsp soy sauce',
      '1 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 tbsp fresh ginger, grated',
      '1 tbsp lemon juice',
      'Green onions for garnish'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'In a small bowl, whisk together honey, soy sauce, olive oil, minced garlic, grated ginger, and lemon juice.',
      'Place salmon fillets in a baking dish and pour the honey mixture over them.',
      'Let marinate for 5-10 minutes.',
      'Bake for 12-15 minutes until salmon is cooked through and flakes easily with a fork.',
      'Garnish with sliced green onions before serving.'
    ],
    isFavorite: true
  },
  {
    id: '3',
    title: 'Classic Guacamole',
    description: 'Fresh and vibrant homemade guacamole with ripe avocados, lime, and cilantro.',
    imageUrl: 'https://images.pexels.com/photos/5640024/pexels-photo-5640024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    calories: 150,
    cuisine: 'Mexican',
    difficulty: 'Easy',
    tags: ['Appetizer', 'Vegan', 'Gluten-Free', 'Raw'],
    ingredients: [
      '3 ripe avocados',
      '1 lime, juiced',
      '1/2 red onion, finely diced',
      '2 Roma tomatoes, seeded and diced',
      '1/4 cup fresh cilantro, chopped',
      '1 jalapeño, seeded and minced',
      'Salt and pepper to taste',
      'Tortilla chips for serving'
    ],
    instructions: [
      'Cut avocados in half, remove the pits, and scoop the flesh into a bowl.',
      'Mash the avocados with a fork to your desired consistency.',
      'Add lime juice, diced onion, tomatoes, cilantro, and jalapeño.',
      'Mix gently to combine all ingredients.',
      'Season with salt and pepper to taste.',
      'Serve immediately with tortilla chips or store with plastic wrap pressed directly onto the surface to prevent browning.'
    ],
    isFavorite: false
  },
  {
    id: '4',
    title: 'Mediterranean Chickpea Salad',
    description: 'A refreshing and healthy salad with chickpeas, cucumbers, tomatoes, and feta cheese.',
    imageUrl: 'https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 20,
    cookTime: 0,
    servings: 4,
    calories: 280,
    cuisine: 'Mediterranean',
    difficulty: 'Easy',
    tags: ['Salad', 'Vegetarian', 'High-Fiber', 'No-Cook'],
    ingredients: [
      '2 cans (15 oz each) chickpeas, drained and rinsed',
      '1 English cucumber, diced',
      '2 cups cherry tomatoes, halved',
      '1/2 red onion, finely diced',
      '1/2 cup Kalamata olives, pitted and halved',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup fresh parsley, chopped',
      '3 tbsp extra virgin olive oil',
      '2 tbsp lemon juice',
      '1 tsp dried oregano',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a large bowl, combine chickpeas, cucumber, cherry tomatoes, red onion, olives, and feta cheese.',
      'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.',
      'Pour the dressing over the salad and toss gently to combine.',
      'Sprinkle with fresh parsley before serving.',
      'For best flavor, refrigerate for at least 30 minutes before serving to allow the flavors to meld.'
    ],
    isFavorite: true
  },
  {
    id: '5',
    title: 'Spicy Chicken Tacos',
    description: 'Flavorful spicy chicken tacos with all the fixings, ready in under 30 minutes.',
    imageUrl: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 320,
    cuisine: 'Mexican',
    difficulty: 'Medium',
    tags: ['Tacos', 'Spicy', 'Dinner', 'High-Protein'],
    ingredients: [
      '1 lb boneless, skinless chicken breasts, thinly sliced',
      '2 tbsp olive oil',
      '1 onion, thinly sliced',
      '1 bell pepper, thinly sliced',
      '2 cloves garlic, minced',
      '1 tbsp chili powder',
      '1 tsp cumin',
      '1/2 tsp paprika',
      '1/4 tsp cayenne pepper',
      'Salt and pepper to taste',
      '8 small corn tortillas',
      'Toppings: avocado, salsa, sour cream, cilantro, lime wedges'
    ],
    instructions: [
      'In a large skillet, heat olive oil over medium-high heat.',
      'Add sliced chicken and cook until no longer pink, about 5-6 minutes.',
      'Add onion and bell pepper, cook for another 3-4 minutes until vegetables begin to soften.',
      'Add minced garlic, chili powder, cumin, paprika, cayenne, salt, and pepper. Stir to combine and cook for 1-2 minutes until fragrant.',
      'Warm tortillas in a dry skillet or in the microwave.',
      'Serve chicken mixture in warm tortillas with your choice of toppings.'
    ],
    isFavorite: false
  },
  {
    id: '6',
    title: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies with a soft center and crispy edges. A timeless favorite!',
    imageUrl: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    calories: 180,
    cuisine: 'American',
    difficulty: 'Easy',
    tags: ['Dessert', 'Baking', 'Vegetarian'],
    ingredients: [
      '1 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '2 cups semisweet chocolate chips',
      '1 cup chopped walnuts (optional)'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
      'In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'In a separate bowl, combine flour, baking soda, and salt. Gradually add to the butter mixture and mix well.',
      'Fold in chocolate chips and walnuts if using.',
      'Drop by rounded tablespoons onto prepared baking sheets, spacing cookies about 2 inches apart.',
      'Bake for 9-11 minutes or until golden brown. Allow cookies to cool on baking sheet for 2 minutes before transferring to wire racks.'
    ],
    isFavorite: true
  }
];