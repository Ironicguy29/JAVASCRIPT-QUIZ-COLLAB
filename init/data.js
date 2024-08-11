const sampleData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "London", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1930"],
      answer: "1912"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2", "O2", "CO2", "H2O"],
      answer: "H2O"
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
      answer: "Hydrogen"
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      answer: "Nile River"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
      answer: "George Washington"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      answer: "Japan"
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
      answer: "Albert Einstein"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond"
    },
    {
      question: "Which country is the largest by land area?",
      options: ["United States", "Russia", "China", "Canada"],
      answer: "Russia"
    },
    {
      question: "What is the capital of Italy?",
      options: ["Madrid", "Athens", "Rome", "Lisbon"],
      answer: "Rome"
    },
    {
      question: "Who was known as the Iron Lady?",
      options: ["Indira Gandhi", "Margaret Thatcher", "Angela Merkel", "Golda Meir"],
      answer: "Margaret Thatcher"
    },
    {
      question: "What is the largest continent on Earth?",
      options: ["Africa", "Asia", "Europe", "North America"],
      answer: "Asia"
    },
    {
      question: "In which year did World War II end?",
      options: ["1939", "1942", "1945", "1948"],
      answer: "1945"
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      answer: "2"
    },
    {
      question: "Which language has the most native speakers in the world?",
      options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
      answer: "Mandarin Chinese"
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
      answer: "Alexander Fleming"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra"
    },
    {
      question: "Which element is the main component of the sun?",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
      answer: "Hydrogen"
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Onion", "Avocado", "Cucumber"],
      answer: "Avocado"
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Earth", "Venus", "Mars", "Mercury"],
      answer: "Mercury"
    },
    {
      question: "Who is the author of the Harry Potter series?",
      options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
      answer: "J.K. Rowling"
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      answer: "Ottawa"
    },
    {
      question: "Which country gifted the Statue of Liberty to the United States?",
      options: ["France", "Germany", "Italy", "Spain"],
      answer: "France"
    },
    {
      question: "Who invented the telephone?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
      answer: "Alexander Graham Bell"
    },
    {
      question: "Which is the smallest planet in our solar system?",
      options: ["Earth", "Mars", "Mercury", "Pluto"],
      answer: "Mercury"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
      answer: "Mount Everest"
    },
    {
      question: "Which organ is primarily responsible for pumping blood in the human body?",
      options: ["Brain", "Lungs", "Liver", "Heart"],
      answer: "Heart"
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Gobi Desert", "Arabian Desert", "Sahara Desert", "Antarctic Desert"],
      answer: "Antarctic Desert"
    },
    {
      question: "Who was the first man to walk on the moon?",
      options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
      answer: "Neil Armstrong"
    },
    {
      question: "What is the capital of Brazil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      answer: "Brasília"
    },
    {
      question: "Which is the longest bone in the human body?",
      options: ["Femur", "Tibia", "Fibula", "Humerus"],
      answer: "Femur"
    },
    {
      question: "Which metal is the best conductor of electricity?",
      options: ["Gold", "Copper", "Silver", "Aluminum"],
      answer: "Silver"
    },
    {
      question: "What is the national flower of Japan?",
      options: ["Rose", "Tulip", "Lily", "Cherry Blossom"],
      answer: "Cherry Blossom"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
      answer: "Blue Whale"
    },
    {
      question: "Who developed the theory of evolution by natural selection?",
      options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Isaac Newton"],
      answer: "Charles Darwin"
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "United Kingdom", "Russia"],
      answer: "Brazil"
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      answer: "Berlin"
    },
    {
      question: "Which is the smallest bird in the world?",
      options: ["Sparrow", "Hummingbird", "Robin", "Finch"],
      answer: "Hummingbird"
    },
    {
      question: "Which is the largest internal organ in the human body?",
      options: ["Brain", "Heart", "Liver", "Kidney"],
      answer: "Liver"
    },
    {
      question: "What is the most widely spoken language in the world?",
      options: ["Spanish", "Mandarin Chinese", "English", "Hindi"],
      answer: "English"
    },
   
    {
        question: "Which is the deepest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        answer: "Michelangelo"
      },
      {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa"
      },
      {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
      },
      {
        question: "Which country is known for inventing pizza?",
        options: ["Spain", "Greece", "Italy", "France"],
        answer: "Italy"
      },
      {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
        answer: "Cairo"
      },
      {
        question: "Who is the current Queen of the United Kingdom?",
        options: ["Elizabeth I", "Victoria", "Elizabeth II", "Margaret"],
        answer: "Elizabeth II"
      },
      {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
      },
      {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Nitrogen"
      },
      {
        question: "Which U.S. state is the largest by area?",
        options: ["California", "Texas", "Alaska", "Montana"],
        answer: "Alaska"
      },
      {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
        answer: "Margaret Thatcher"
      },
      {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Elephant", "Lion", "Bear"],
        answer: "Lion"
      },
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Kolkata", "Delhi", "New Delhi"],
        answer: "New Delhi"
      },
      {
        question: "What is the hardest naturally occurring mineral?",
        options: ["Quartz", "Topaz", "Diamond", "Corundum"],
        answer: "Diamond"
      },
      {
        question: "Which country is the largest producer of coffee in the world?",
        options: ["Colombia", "Vietnam", "Ethiopia", "Brazil"],
        answer: "Brazil"
      },
      {
        question: "Which country hosted the first modern Olympic Games in 1896?",
        options: ["France", "Italy", "United States", "Greece"],
        answer: "Greece"
      },
      {
        question: "Which element is represented by the symbol 'O'?",
        options: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
        answer: "Oxygen"
      },
      {
        question: "Which planet is known as the Earth's twin?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
      },
      {
        question: "What is the national currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Rupee"],
        answer: "Yen"
      },
      {
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O"
      },
      {
        question: "Which chemical element has the symbol 'Au'?",
        options: ["Silver", "Gold", "Aluminum", "Copper"],
        answer: "Gold"
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: "Nitrogen"
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Portuguese"
      },
      {
        question: "Which planet is known for its rings?",
        options: ["Mars", "Jupiter", "Uranus", "Saturn"],
        answer: "Saturn"
      },
      {
        question: "Which U.S. state is known as the 'Sunshine State'?",
        options: ["California", "Texas", "Florida", "Hawaii"],
        answer: "Florida"
      },
      {
        question: "What is the largest bone in the human body?",
        options: ["Humerus", "Tibia", "Femur", "Fibula"],
        answer: "Femur"
      },
      {
        question: "What is the capital city of Spain?",
        options: ["Barcelona", "Seville", "Madrid", "Valencia"],
        answer: "Madrid"
      },
      {
        question: "Who wrote the play 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "George Bernard Shaw", "Oscar Wilde"],
        answer: "William Shakespeare"
      },
      {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
        answer: "Photosynthesis"
      },
      {
        question: "Who was the first person to reach the South Pole?",
        options: ["Robert Falcon Scott", "Ernest Shackleton", "Roald Amundsen", "Edmund Hillary"],
        answer: "Roald Amundsen"
      },
      {
        question: "Which river flows through the Grand Canyon?",
        options: ["Mississippi River", "Colorado River", "Rio Grande", "Yukon River"],
        answer: "Colorado River"
      },
      {
        question: "Which famous ship sank on its maiden voyage in 1912?",
        options: ["Queen Mary", "Lusitania", "Titanic", "Bismarck"],
        answer: "Titanic"
      },
      {
        question: "Who developed the polio vaccine?",
        options: ["Alexander Fleming", "Louis Pasteur", "Jonas Salk", "Edward Jenner"],
        answer: "Jonas Salk"
      },
      {
        question: "Which U.S. president is on the $100 bill?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"],
        answer: "Benjamin Franklin"
      },
      {
        question: "What is the name of the largest reef system in the world?",
        options: ["Great Barrier Reef", "Red Sea Coral Reef", "Florida Reef", "New Caledonia Barrier Reef"],
        answer: "Great Barrier Reef"
      },
      {
        question: "Which organ in the human body is responsible for filtering blood?",
        options: ["Heart", "Liver", "Kidneys", "Lungs"],
        answer: "Kidneys"
      },
      {
        question: "Which is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin"
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Aristotle"],
        answer: "Homer"
      },
      {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "South Africa", "India", "Brazil"],
        answer: "Australia"
      },
      {
        question: "Which country is known for the Great Wall?",
        options: ["Japan", "India", "China", "Russia"],
        answer: "China"
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Cheetah"],
        answer: "Lion"
      },
      {
        question: "What is the primary ingredient in bread?",
        options: ["Rice", "Flour", "Corn", "Oats"],
        answer: "Flour"
      },
      {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
        answer: "Cairo"
      },
      {
        question: "Which planet is known as the Morning Star?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
      },
      {
        question: "Who was the first person to climb Mount Everest?",
        options: ["George Mallory", "Tenzing Norgay", "Edmund Hillary", "Reinhold Messner"],
        answer: "Edmund Hillary"
      },
      {
        question: "Which ocean is Bermuda located in?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
        answer: "Atlantic Ocean"
      },
      {
        question: "Which organ of the human body is affected by hepatitis?",
        options: ["Heart", "Liver", "Lungs", "Kidneys"],
        answer: "Liver"
      },
      {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        answer: "Greenland"
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
      },
      {
        question: "Which city hosted the first modern Olympic Games?",
        options: ["Paris", "Athens", "London", "Rome"],
        answer: "Athens"
      },
      {
        question: "Which is the largest landlocked country in the world?",
        options: ["Mongolia", "Kazakhstan", "Chad", "Niger"],
        answer: "Kazakhstan"
      },
      {
        question: "Which element is a diamond made of?",
        options: ["Carbon", "Silicon", "Sulfur", "Oxygen"],
        answer: "Carbon"
      },
      {
        question: "Which city is known as the Eternal City?",
        options: ["Athens", "Cairo", "Rome", "Jerusalem"],
        answer: "Rome"
      },
      {
        question: "Which animal is known as the Ship of the Desert?",
        options: ["Horse", "Camel", "Elephant", "Donkey"],
        answer: "Camel"
      },
      {
        question: "Which country is famous for tulips?",
        options: ["France", "Italy", "Netherlands", "Belgium"],
        answer: "Netherlands"
      },
      {
        question: "Who is the Greek god of the sea?",
        options: ["Zeus", "Poseidon", "Hades", "Ares"],
        answer: "Poseidon"
      },
      {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Seoul", "Incheon", "Daegu"],
        answer: "Seoul"
      },
      {
        question: "Which element is known as the building block of life?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        answer: "Carbon"
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Sophocles", "Homer", "Aristotle", "Plato"],
        answer: "Homer"
      },
      {
        question: "Which vitamin is produced when a person is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D"
      },
      {
        question: "What is the largest country in Africa by area?",
        options: ["Nigeria", "Algeria", "Egypt", "Sudan"],
        answer: "Algeria"
      },
      {
        question: "Which instrument is used to measure air pressure?",
        options: ["Thermometer", "Anemometer", "Barometer", "Hygrometer"],
        answer: "Barometer"
      },
      {
        question: "Which ocean surrounds the Maldives?",
        options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Southern Ocean"],
        answer: "Indian Ocean"
      },
      {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
        answer: "Margaret Thatcher"
      },
      {
        question: "Which country is the origin of the sport of soccer?",
        options: ["Brazil", "Argentina", "Germany", "England"],
        answer: "England"
      },
      {
        question: "What is the primary gas found in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Nitrogen"
      },
      {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Euro", "Yuan", "Yen"],
        answer: "Yen"
      },
      {
        question: "Which is the hottest planet in the solar system?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Venus"
      },
      {
        question: "What is the national language of Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese"
      },
      {
        question: "Which country is known as the Land of the Thousand Lakes?",
        options: ["Sweden", "Norway", "Finland", "Iceland"],
        answer: "Finland"
      },
      {
        question: "Which explorer discovered America in 1492?",
        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Leif Erikson"],
        answer: "Christopher Columbus"
      },
      {
        question: "Which animal is known for its ability to change colors?",
        options: ["Frog", "Chameleon", "Snake", "Lizard"],
        answer: "Chameleon"
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Silver", "Iron"],
        answer: "Oxygen"
      },
      {
        question: "Which city is known as the City of Love?",
        options: ["Rome", "Venice", "New York", "Paris"],
        answer: "Paris"
      },
      {
        question: "What is the largest island in the Mediterranean Sea?",
        options: ["Sardinia", "Corsica", "Cyprus", "Sicily"],
        answer: "Sicily"
      },
      {
        question: "What is the most spoken language in South America?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Spanish"
      }
    ];
    module.exports = { data: sampleData };


    