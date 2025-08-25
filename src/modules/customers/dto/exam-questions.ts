// Mock questions data (this should eventually come from the backend)
export type Question = {
  id: number;
  type:
    | 'fill-gap'
    | 'multiple-choice'
    | 'reading'
    | 'matching'
    | 'verb-to-be'
    | 'writing';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
  readingPassage?: string;
  matchingPairs?: { word: string; meaning: string }[];
};
export const mockQuestions: Question[] = [
  // Fill in the gaps questions (4 points)
  {
    id: 1,
    type: 'fill-gap',
    question: 'Can you drive a truck? No, ____',
    options: ['I can', 'We can', "I can't", "You can't"],
    correctAnswer: "I can't",
    points: 4,
  },
  {
    id: 2,
    type: 'fill-gap',
    question: '______ Alice come here often?',
    options: ['Where', 'Is', 'Does', 'Are'],
    correctAnswer: 'Does',
    points: 4,
  },
  {
    id: 3,
    type: 'fill-gap',
    question:
      'What languages does your neighbor speak? She ____ French and English',
    options: ['Speaking', 'Is speak', 'Speak', 'Speaks'],
    correctAnswer: 'Speaks',
    points: 4,
  },
  {
    id: 4,
    type: 'fill-gap',
    question: 'What did you do yesterday? We ____ a book',
    options: ['read', 'did read', 'was read', 'reading'],
    correctAnswer: 'read',
    points: 4,
  },
  // Multiple choice questions (8 points)
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What color is it?',
    options: ['Blue', 'Purple', 'Orange', 'Red'],
    correctAnswer: 'Blue',
    points: 8,
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What number is it?',
    options: ['One', 'Eleven', 'Three', 'Ten'],
    correctAnswer: 'Eleven',
    points: 8,
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Hello my name is Emma I am from _____',
    options: ["I'm Canadian", "I'm Peruvian", "I'm Brazilian", "I'm Honduran"],
    correctAnswer: "I'm Canadian",
    points: 8,
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Do you prefer cats or dogs?',
    options: [
      'Both are nice.',
      "It's not OK.",
      'All right.',
      'I forgot to turn the lights off.',
    ],
    correctAnswer: 'Both are nice.',
    points: 8,
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'I am afraid my sister is sick.',
    options: ["Oh, I'm sorry.", 'Too late.', 'Can I go now?'],
    correctAnswer: "Oh, I'm sorry.",
    points: 8,
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: "Let's go to the park next weekend.",
    options: ['As soon as possible.', 'Hope it is.', 'Great idea.'],
    correctAnswer: 'Great idea.',
    points: 8,
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: 'Can I talk to you for a minute?',
    options: ['Be careful.', 'Of course.', 'Just one.'],
    correctAnswer: 'Of course.',
    points: 8,
  },
  // Reading comprehension questions (5 points)
  {
    id: 12,
    type: 'reading',
    question: 'What happens first?',
    options: ['Wake up', 'Get dressed', 'Eat lunch', 'Walk to school'],
    correctAnswer: 'Wake up',
    points: 5,
    readingPassage:
      'My day\nFirst, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.\nI play outside. I like to play. I read a book. I like to read books. I walk home. I do not like walking home. My mother cooks soup for dinner. The soup is hot. Then, I go to bed. I do not like to go to bed.',
  },
  {
    id: 13,
    type: 'reading',
    question: 'What do I like?',
    options: ['Rain', 'Going to bed', 'Walking home', 'Books'],
    correctAnswer: 'Books',
    points: 5,
    readingPassage:
      'My day\nFirst, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.\nI play outside. I like to play. I read a book. I like to read books. I walk home. I do not like walking home. My mother cooks soup for dinner. The soup is hot. Then, I go to bed. I do not like to go to bed.',
  },
  {
    id: 14,
    type: 'reading',
    question: 'How do I go to school?',
    options: ['I ride a bike.', 'I ride the bus.', 'I walk.', 'I drive a car.'],
    correctAnswer: 'I walk.',
    points: 5,
    readingPassage:
      'My day\nFirst, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.\nI play outside. I like to play. I read a book. I like to read books. I walk home. I do not like walking home. My mother cooks soup for dinner. The soup is hot. Then, I go to bed. I do not like to go to bed.',
  },
  {
    id: 15,
    type: 'reading',
    question: 'What do I eat for dinner?',
    options: ['Soup', 'Sandwich', 'Apple', 'Pie'],
    correctAnswer: 'Soup',
    points: 5,
    readingPassage:
      'My day\nFirst, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.\nI play outside. I like to play. I read a book. I like to read books. I walk home. I do not like walking home. My mother cooks soup for dinner. The soup is hot. Then, I go to bed. I do not like to go to bed.',
  },
  {
    id: 16,
    type: 'reading',
    question: 'What do I not like?',
    options: ['Playing', 'Soup', 'Going to school', 'Going to bed'],
    correctAnswer: 'Going to bed',
    points: 5,
    readingPassage:
      'My day\nFirst, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.\nI play outside. I like to play. I read a book. I like to read books. I walk home. I do not like walking home. My mother cooks soup for dinner. The soup is hot. Then, I go to bed. I do not like to go to bed.',
  },
  // Matching questions (2 points)
  {
    id: 17,
    type: 'matching',
    question: 'Match each tool image with its correct Spanish name:',
    correctAnswer: ['Sierra', 'Drill', 'Scissors', 'Hammer'],
    points: 2,
    matchingPairs: [
      { word: 'Sierra', meaning: 'Saw' },
      { word: 'Drill', meaning: 'Taladro' },
      { word: 'Scissors', meaning: 'Tijeras' },
      { word: 'Hammer', meaning: 'Martillo' },
    ],
  },
  // Verb to be questions (1 point)
  {
    id: 18,
    type: 'verb-to-be',
    question:
      'Fill in the gaps with the correct form of the verb to be (IS - ARE - AM):\nMy new friends ___ Daniel and Juan Camilo. They ___ students in my school. Daniel ___ is tall and slim, and Juan ___ short. I ___ happy to be their friend. We ___ in fifth grade. We ___ in the school basketball team. I ___ tall and slim. I ___ 10 years old. We ___ good basketball players.',
    correctAnswer: [
      'are',
      'are',
      'is',
      'is',
      'am',
      'are',
      'are',
      'am',
      'am',
      'are',
    ],
    points: 1,
  },
  // Writing question (1 point)
  {
    id: 19,
    type: 'writing',
    question:
      'Write a short paragraph in English explaining your motivation for traveling to Canada. Your answer should:\n- Be between 5 and 8 sentences\n- Include personal reasons, objectives, and any plans or activities you would like to do in Canada\n- Use correct grammar, punctuation, and vocabulary\nThis section evaluates your ability to express ideas clearly and coherently in written English.',
    correctAnswer: '',
    points: 1,
  },
];
