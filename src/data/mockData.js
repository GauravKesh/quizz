export const categories = [
    { id: 'history', name: 'History', icon: '/images/history.jpeg' },
    { id: 'science', name: 'Science', icon: '/images/science.jpg' },
    { id: 'math', name: 'Math', icon: '/images/math.jpg' },
    { id: 'programming', name: 'Programming', icon: '/images/programming.jpg' },
    { id: 'geography', name: 'Geography', icon: '/images/geography.jpg' },
    { id: 'literature', name: 'Literature', icon: '/images/literature.jpeg' },
    { id: 'sports', name: 'Sports', icon: '/images/sports.jpeg' },
    { id: 'movies', name: 'Movies', icon: '/images/movies.jpeg' },
    { id: 'technology', name: 'Technology', icon: '/images/technology.jpeg' },
    { id: 'art', name: 'Art', icon: '/images/arts.jpeg' }
];

export const quizzes = [
    // History
    {
        id: 'quiz-history-1',
        title: 'World War II Basics',
        category: 'history',
        questions: [
            { question: 'When did World War II end?', options: ['1945', '1939', '1942', '1950'], answer: '1945' },
            { question: 'Who was the UK PM during WWII?', options: ['Churchill', 'Thatcher', 'Blair', 'Attlee'], answer: 'Churchill' },
            { question: 'What event started WWII?', options: ['Pearl Harbor', 'Invasion of Poland', 'D-Day', 'Battle of Britain'], answer: 'Invasion of Poland' },
            { question: 'Which countries were in the Axis powers?', options: ['Germany, Italy, Japan', 'UK, USA, France', 'Russia, China, India', 'Brazil, Argentina, Chile'], answer: 'Germany, Italy, Japan' },
            { question: 'What was the code name for the Allied invasion of Normandy?', options: ['Overlord', 'Torch', 'Barbarossa', 'Market Garden'], answer: 'Overlord' },
            { question: 'Where was the atomic bomb first dropped?', options: ['Nagasaki', 'Hiroshima', 'Tokyo', 'Osaka'], answer: 'Hiroshima' },
            { question: 'Which conference planned post-war Europe?', options: ['Yalta', 'Geneva', 'Versailles', 'Potsdam'], answer: 'Yalta' },
            { question: 'Who was the US President at the end of WWII?', options: ['FDR', 'Truman', 'Eisenhower', 'Nixon'], answer: 'Truman' },
            { question: 'What was the Holocaust?', options: ['German surrender', 'Nuclear warfare', 'Genocide of Jews', 'Cold War'], answer: 'Genocide of Jews' },
            { question: 'Which battle is seen as a turning point on the Eastern Front?', options: ['Stalingrad', 'Kursk', 'Moscow', 'Leningrad'], answer: 'Stalingrad' }
        ]
    },
    {
        id: 'quiz-history-2',
        title: 'Ancient Civilizations',
        category: 'history',
        questions: [
            { question: 'Where was the Indus Valley Civilization located?', options: ['India', 'Egypt', 'China', 'Greece'], answer: 'India' }
        ]
    },

    // Science
    {
        id: 'quiz-science-1',
        title: 'Physics Basics',
        category: 'science',
        questions: [
            { question: 'What is the speed of light?', options: ['3x10^8 m/s', '150,000 km/s', '1,000 m/s', 'None'], answer: '3x10^8 m/s' }
        ]
    },
    {
        id: 'quiz-science-2',
        title: 'Biology: Cells',
        category: 'science',
        questions: [
            { question: 'What is H2O?', options: ['Oxygen', 'Hydrogen', 'Water', 'Helium'], answer: 'Water' },
            { question: 'Who discovered gravity?', options: ['Einstein', 'Newton', 'Galileo', 'Tesla'], answer: 'Newton' },
            { question: 'What planet is known as Red Planet?', options: ['Earth', 'Mars', 'Venus', 'Jupiter'], answer: 'Mars' },
            { question: 'Which gas do plants absorb?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], answer: 'Carbon Dioxide' },
            { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: '100°C' },
            { question: 'What is the symbol for Gold?', options: ['Au', 'Ag', 'Gd', 'Go'], answer: 'Au' },
            { question: 'What organ pumps blood?', options: ['Liver', 'Brain', 'Heart', 'Lung'], answer: 'Heart' },
            { question: 'How many bones in adult body?', options: ['206', '205', '210', '201'], answer: '206' },
            { question: 'Which vitamin from sunlight?', options: ['A', 'B', 'C', 'D'], answer: 'D' },
            { question: 'Which part of cell makes energy?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Membrane'], answer: 'Mitochondria' }
        ]
    },

    // Math
    {
        id: 'quiz-math-1',
        title: 'Algebra Basics',
        category: 'math',
        questions: [
            { question: 'What is x in 2x + 3 = 7?', options: ['1', '2', '3', '4'], answer: '2' },
            { question: 'What is (x+2)(x+3)?', options: ['x^2+6x+6', 'x^2+5x+6', 'x^2+5x+5', 'x^2+4x+6'], answer: 'x^2+5x+6' },
            { question: 'What is the square root of 49?', options: ['6', '7', '8', '9'], answer: '7' },
            { question: 'Simplify: 3x + 2x', options: ['6x', '5x', '4x', '3x^2'], answer: '5x' },
            { question: 'What is x if x² = 16?', options: ['4', '±4', '8', '±8'], answer: '±4' },
            { question: 'Factor: x² - 9', options: ['(x+3)(x-3)', 'x(x-9)', '(x+9)(x-1)', 'Prime'], answer: '(x+3)(x-3)' },
            { question: 'Solve: 3(x - 2) = 9', options: ['1', '3', '5', '6'], answer: '5' },
            { question: 'What is 4²?', options: ['8', '16', '24', '12'], answer: '16' },
            { question: 'What is the cube root of 27?', options: ['2', '3', '6', '9'], answer: '3' },
            { question: 'What is the coefficient in 5x²?', options: ['5', 'x', '2', 'x²'], answer: '5' }
        ]
    },
    {
        id: 'quiz-math-2',
        title: 'Geometry Essentials',
        category: 'math',
        questions: [
            { question: 'What is x in 2x + 3 = 7?', options: ['1', '2', '3', '4'], answer: '2' },
            { question: 'What is (x+2)(x+3)?', options: ['x^2+6x+6', 'x^2+5x+6', 'x^2+5x+5', 'x^2+4x+6'], answer: 'x^2+5x+6' },
            { question: 'What is the square root of 49?', options: ['6', '7', '8', '9'], answer: '7' },
            { question: 'Simplify: 3x + 2x', options: ['6x', '5x', '4x', '3x^2'], answer: '5x' },
            { question: 'What is x if x² = 16?', options: ['4', '±4', '8', '±8'], answer: '±4' },
            { question: 'Factor: x² - 9', options: ['(x+3)(x-3)', 'x(x-9)', '(x+9)(x-1)', 'Prime'], answer: '(x+3)(x-3)' },
            { question: 'Solve: 3(x - 2) = 9', options: ['1', '3', '5', '6'], answer: '5' },
            { question: 'What is 4²?', options: ['8', '16', '24', '12'], answer: '16' },
            { question: 'What is the cube root of 27?', options: ['2', '3', '6', '9'], answer: '3' },
            { question: 'What is the coefficient in 5x²?', options: ['5', 'x', '2', 'x²'], answer: '5' }
        ]
    },

    // Programming
    {
        id: 'quiz-programming-1',
        title: 'JavaScript Fundamentals',
        category: 'programming',
        questions: [
            { question: 'Which keyword declares a constant?', options: ['let', 'var', 'const', 'define'], answer: 'const' },
            { question: 'Which company developed JS?', options: ['Microsoft', 'Sun', 'Netscape', 'Oracle'], answer: 'Netscape' },
            { question: 'What is "===" in JS?', options: ['Strict equality', 'Assignment', 'Inequality', 'Bitwise op'], answer: 'Strict equality' },
            { question: 'Which type is not primitive?', options: ['string', 'boolean', 'number', 'object'], answer: 'object' },
            { question: 'Which function converts JSON string to object?', options: ['JSON.parse()', 'JSON.stringify()', 'toObject()', 'parseJSON()'], answer: 'JSON.parse()' },
            { question: 'Which array method removes last element?', options: ['pop()', 'shift()', 'slice()', 'splice()'], answer: 'pop()' },
            { question: 'What does DOM stand for?', options: ['Document Object Model', 'Data Output Module', 'Document Oriented Map', 'Dynamic Object Model'], answer: 'Document Object Model' },
            { question: 'Which event fires when a button is clicked?', options: ['onClick', 'onTap', 'onHover', 'onPress'], answer: 'onClick' },
            { question: 'What is a closure?', options: ['Function + Lexical scope', 'JS class', 'Event listener', 'API call'], answer: 'Function + Lexical scope' },
            { question: 'Which symbol is used for comments?', options: ['//', '##', '<!--', '**'], answer: '//' }
        ]
    },
    {
        id: 'quiz-programming-2',
        title: 'Python Basics',
        category: 'programming',
        questions: [
            { question: 'How do you declare a function in Python?', options: ['func', 'function', 'def', 'lambda'], answer: 'def' }
        ]
    },

    // Geography
    {
        id: 'quiz-geography-1',
        title: 'World Capitals',
        category: 'geography',
        questions: [
            { "question": "Which is the longest river in the world?", "options": ["Amazon", "Nile", "Yangtze", "Mississippi"], "answer": "Nile" },
            { "question": "Which desert is the largest in the world?", "options": ["Sahara", "Gobi", "Arctic", "Antarctic"], "answer": "Antarctic" },
            { "question": "What is the capital of Canada?", "options": ["Toronto", "Ottawa", "Montreal", "Vancouver"], "answer": "Ottawa" },
            { "question": "Mount Everest is located in?", "options": ["India", "China", "Nepal", "Pakistan"], "answer": "Nepal" },
            { "question": "Which continent has the most countries?", "options": ["Africa", "Asia", "Europe", "South America"], "answer": "Africa" },
            { "question": "Which ocean is the deepest?", "options": ["Indian", "Pacific", "Atlantic", "Arctic"], "answer": "Pacific" },
            { "question": "What is the smallest country by area?", "options": ["Monaco", "Malta", "Vatican City", "Liechtenstein"], "answer": "Vatican City" },
            { "question": "Which country has the most time zones?", "options": ["USA", "Russia", "France", "China"], "answer": "France" },
            { "question": "What is the capital of Japan?", "options": ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], "answer": "Tokyo" }
        ]
    },

    // Literature
    {
        id: 'quiz-literature-1',
        title: 'Shakespeare Plays',
        category: 'literature',
        questions: [
            { "question": "Who wrote 'Pride and Prejudice'?", "options": ["Jane Austen", "Emily Bronte", "Charles Dickens", "George Eliot"], "answer": "Jane Austen" },
            { "question": "What is the famous work of Homer?", "options": ["Odyssey", "Inferno", "Ulysses", "Macbeth"], "answer": "Odyssey" },
            { "question": "Who wrote 'The Raven'?", "options": ["Edgar Allan Poe", "Robert Frost", "T.S. Eliot", "Walt Whitman"], "answer": "Edgar Allan Poe" },
            { "question": "Who is the author of '1984'?", "options": ["Orwell", "Huxley", "Bradbury", "Atwood"], "answer": "Orwell" },
            { "question": "What is the genre of 'The Hobbit'?", "options": ["Fantasy", "Drama", "Science Fiction", "Mystery"], "answer": "Fantasy" },
            { "question": "Who wrote 'To Kill a Mockingbird'?", "options": ["Harper Lee", "Mark Twain", "Salinger", "Hemingway"], "answer": "Harper Lee" },
            { "question": "Which play features Romeo and Juliet?", "options": ["Tragedy", "Comedy", "Historical", "Mystery"], "answer": "Tragedy" },
            { "question": "Who wrote 'Divine Comedy'?", "options": ["Dante", "Milton", "Virgil", "Shakespeare"], "answer": "Dante" },
            { "question": "Who is the author of 'The Catcher in the Rye'?", "options": ["J.D. Salinger", "F. Scott Fitzgerald", "Stephen King", "George Orwell"], "answer": "J.D. Salinger" }
        ]
    },

    // Sports
    {
        id: 'quiz-sports-1',
        title: 'Olympic Games',
        category: 'sports',
        questions: [
            { "question": "Which country won the 2018 FIFA World Cup?", "options": ["Germany", "France", "Brazil", "Croatia"], "answer": "France" },
            { "question": "Who holds the most Olympic gold medals?", "options": ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"], "answer": "Michael Phelps" },
            { "question": "In which sport is the term 'love' used?", "options": ["Tennis", "Football", "Cricket", "Basketball"], "answer": "Tennis" },
            { "question": "How many players in a soccer team?", "options": ["9", "10", "11", "12"], "answer": "11" },
            { "question": "What sport uses a puck?", "options": ["Ice Hockey", "Field Hockey", "Cricket", "Baseball"], "answer": "Ice Hockey" },
            { "question": "Which country hosts the Tour de France?", "options": ["Italy", "France", "Spain", "Switzerland"], "answer": "France" },
            { "question": "Which sport has a 'slam dunk'?", "options": ["Basketball", "Volleyball", "Tennis", "Football"], "answer": "Basketball" },
            { "question": "What is the national sport of Japan?", "options": ["Karate", "Sumo Wrestling", "Judo", "Baseball"], "answer": "Sumo Wrestling" },
            { "question": "Which sport uses the term 'hat-trick'?", "options": ["Football", "Cricket", "Hockey", "All of these"], "answer": "All of these" }
        ]
    },

    // Movies
    {
        id: 'quiz-movies-1',
        title: 'Oscar Winners',
        category: 'movies',
        questions: [
            { "question": "Who directed 'Inception'?", "options": ["Nolan", "Spielberg", "Cameron", "Fincher"], "answer": "Nolan" },
            { "question": "What is the highest grossing movie?", "options": ["Avatar", "Endgame", "Titanic", "Frozen"], "answer": "Avatar" },
            { "question": "Who played Iron Man?", "options": ["Chris Evans", "Chris Hemsworth", "RDJ", "Mark Ruffalo"], "answer": "RDJ" },
            { "question": "Which movie has 'I'm the king of the world'?", "options": ["Titanic", "Gladiator", "Braveheart", "Avatar"], "answer": "Titanic" },
            { "question": "Which year did Oscars start?", "options": ["1929", "1939", "1949", "1959"], "answer": "1929" },
            { "question": "Who directed 'Pulp Fiction'?", "options": ["Tarantino", "Nolan", "Kubrick", "Fincher"], "answer": "Tarantino" },
            { "question": "Which movie won Best Picture in 1994?", "options": ["Forrest Gump", "Pulp Fiction", "Shawshank", "Four Weddings"], "answer": "Forrest Gump" },
            { "question": "Which animated film won Oscar first?", "options": ["Shrek", "Toy Story", "Up", "Beauty and the Beast"], "answer": "Shrek" },
            { "question": "Who voiced Buzz Lightyear?", "options": ["Tom Hanks", "Tim Allen", "Chris Evans", "Robin Williams"], "answer": "Tim Allen" }
        ]
    },

    // Technology
    {
        id: 'quiz-technology-1',
        title: 'Tech Giants',
        category: 'technology',
        questions: [
            { "question": "What does HTTP stand for?", "options": ["HyperText Transfer Protocol", "Hyper Type Text Protocol", "High Tech Transfer Protocol", "None"], "answer": "HyperText Transfer Protocol" },
            { "question": "What year was Google founded?", "options": ["1996", "1997", "1998", "1999"], "answer": "1998" },
            { "question": "What language is used for Android development?", "options": ["Java", "Swift", "Kotlin", "Python"], "answer": "Kotlin" },
            { "question": "What company makes the iPhone?", "options": ["Apple", "Samsung", "Google", "Nokia"], "answer": "Apple" },
            { "question": "Which company owns Instagram?", "options": ["Meta", "Google", "Microsoft", "Snap"], "answer": "Meta" },
            { "question": "Who created Linux?", "options": ["Linus Torvalds", "Bill Gates", "Steve Jobs", "Richard Stallman"], "answer": "Linus Torvalds" },
            { "question": "What is AI short for?", "options": ["Artificial Intelligence", "Auto Integration", "Applied Info", "None"], "answer": "Artificial Intelligence" },
            { "question": "What is RAM?", "options": ["Read Access Memory", "Random Access Memory", "Rapid Access Machine", "None"], "answer": "Random Access Memory" },
            { "question": "Which device stores BIOS?", "options": ["Hard disk", "RAM", "ROM", "CPU"], "answer": "ROM" }
        ]
    },

    // Art
    {
        id: 'quiz-art-1',
        title: 'Famous Painters',
        category: 'art',
        questions: [
            { "question": "What style is Picasso famous for?", "options": ["Cubism", "Impressionism", "Realism", "Fauvism"], "answer": "Cubism" },
            { "question": "Which artist cut off part of his ear?", "options": ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], "answer": "Van Gogh" },
            { "question": "The Starry Night was painted by?", "options": ["Van Gogh", "Monet", "Da Vinci", "Michelangelo"], "answer": "Van Gogh" },
            { "question": "What does Dali's melting clock painting depict?", "options": ["Surrealism", "Cubism", "Impressionism", "Realism"], "answer": "Surrealism" },
            { "question": "Who painted The Last Supper?", "options": ["Da Vinci", "Raphael", "Titian", "Rembrandt"], "answer": "Da Vinci" },
            { "question": "Which medium is used in fresco painting?", "options": ["Water on plaster", "Oil on canvas", "Acrylic", "Charcoal"], "answer": "Water on plaster" },
            { "question": "Michelangelo painted the ceiling of?", "options": ["Sistine Chapel", "St Peter's Basilica", "Duomo", "Vatican Palace"], "answer": "Sistine Chapel" },
            { "question": "Which artist is known for Campbell's soup cans?", "options": ["Andy Warhol", "Roy Lichtenstein", "Keith Haring", "David Hockney"], "answer": "Andy Warhol" },
            { "question": "Which era was Da Vinci from?", "options": ["Renaissance", "Baroque", "Modern", "Gothic"], "answer": "Renaissance" }
        ]
    }, {
        id: 'quiz-history-mini-1',
        title: 'American Revolution Basics',
        category: 'history',
        questions: [
            { question: 'When did the American Revolution begin?', options: ['1775', '1783', '1765', '1801'], answer: '1775' },
            { question: 'Who was the first President of the USA?', options: ['Jefferson', 'Lincoln', 'Washington', 'Adams'], answer: 'Washington' },
            { question: 'Which country helped the US during the revolution?', options: ['France', 'Spain', 'Germany', 'Russia'], answer: 'France' }
        ]
    },
    {
        id: 'quiz-math-mini-1',
        title: 'Basic Arithmetic',
        category: 'math',
        questions: [
            { question: 'What is 7 + 5?', options: ['10', '12', '13', '11'], answer: '12' },
            { question: 'What is 9 × 3?', options: ['27', '18', '21', '24'], answer: '27' },
            { question: 'What is 15 ÷ 3?', options: ['3', '4', '5', '6'], answer: '5' }
        ]
    },
    {
        id: 'quiz-programming-mini-1',
        title: 'HTML Basics',
        category: 'programming',
        questions: [
            { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'None'], answer: 'HyperText Markup Language' },
            { question: 'Which tag makes text bold?', options: ['<strong>', '<i>', '<b>', '<p>'], answer: '<b>' },
            { question: 'Which tag is used for links?', options: ['<img>', '<a>', '<div>', '<span>'], answer: '<a>' }
        ]
    },
    {
        id: 'quiz-geography-mini-1',
        title: 'Continents & Oceans',
        category: 'geography',
        questions: [
            { question: 'How many continents are there?', options: ['5', '6', '7', '8'], answer: '7' },
            { question: 'Which is the largest ocean?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 'Pacific' },
            { question: 'Which continent is Egypt in?', options: ['Africa', 'Asia', 'Europe', 'South America'], answer: 'Africa' }
        ]
    },
    {
        id: 'quiz-literature-mini-1',
        title: 'Poetry & Prose',
        category: 'literature',
        questions: [
            { question: 'Who wrote "The Road Not Taken"?', options: ['Frost', 'Whitman', 'Dickinson', 'Poe'], answer: 'Frost' },
            { question: 'Author of "Animal Farm"?', options: ['Huxley', 'Rowling', 'Orwell', 'Atwood'], answer: 'Orwell' },
            { question: 'Shakespeare’s play with witches?', options: ['Othello', 'Macbeth', 'Hamlet', 'King Lear'], answer: 'Macbeth' }
        ]
    },
    {
        id: 'quiz-sports-mini-1',
        title: 'Cricket Trivia',
        category: 'sports',
        questions: [
            { question: 'How many players per team in cricket?', options: ['10', '11', '12', '9'], answer: '11' },
            { question: 'Who has most runs in ODIs?', options: ['Kohli', 'Tendulkar', 'Ponting', 'Lara'], answer: 'Tendulkar' },
            { question: 'Where is the ICC headquarters?', options: ['London', 'Dubai', 'Mumbai', 'Sydney'], answer: 'Dubai' }
        ]
    },
    {
        id: 'quiz-movies-mini-1',
        title: 'Movie Quotes',
        category: 'movies',
        questions: [
            { question: 'Who said “I’ll be back”?', options: ['Schwarzenegger', 'Stallone', 'Norris', 'Diesel'], answer: 'Schwarzenegger' },
            { question: 'Which film has “May the Force be with you”?', options: ['Star Wars', 'Star Trek', 'Matrix', 'Avengers'], answer: 'Star Wars' },
            { question: 'Main character of Titanic?', options: ['Rose', 'Jack', 'Cal', 'Ruth'], answer: 'Jack' }
        ]
    },
    {
        id: 'quiz-technology-mini-1',
        title: 'Gadget Basics',
        category: 'technology',
        questions: [
            { question: 'Who makes Pixel phones?', options: ['Apple', 'Samsung', 'Google', 'OnePlus'], answer: 'Google' },
            { question: 'What is a CPU?', options: ['Central Power Unit', 'Core Processing Unit', 'Central Processing Unit', 'Compute Processing Unit'], answer: 'Central Processing Unit' },
            { question: 'What does USB stand for?', options: ['Universal Serial Bus', 'Unified Storage Block', 'User Smart Bridge', 'Ultra Secure Band'], answer: 'Universal Serial Bus' }
        ]
    },
    {
        id: 'quiz-art-mini-1',
        title: 'Famous Artworks',
        category: 'art',
        questions: [
            { question: 'Who painted Starry Night?', options: ['Van Gogh', 'Monet', 'Da Vinci', 'Picasso'], answer: 'Van Gogh' },
            { question: 'Which era was the Mona Lisa painted in?', options: ['Modern', 'Renaissance', 'Baroque', 'Impressionist'], answer: 'Renaissance' },
            { question: 'Which material is used in sculpture?', options: ['Clay', 'Oil', 'Charcoal', 'Canvas'], answer: 'Clay' }
        ]
    }
      
      
      
      
      
      
      
      
      
];
  