// ----------
// Hold all of the data about the different plants and animals here
// ---------
var basic_food_chain_data = {
    
    // store all of the questions and answers for the land here
    land : [
        { 
            question       : "1. Which of these makes it own enery from the sun?",
            images         : [ 
                "images/land_food_chain/land_iquana.png", 
                "images/land_food_chain/prickly_pear_cactus.png", 
                "images/land_food_chain/blue_footed_booby.png" 
            ],
            animals        : [ 
                "Land Iquana", 
                "Prickly Pear Cactus", 
                "Blue-footed Booby" 
            ],
            answer : "Prickly Pear Cactus"
        },
        { 
            question       : "2. Which of these animals eats cacti?",
            images         : [ 
                "images/land_food_chain/land_iquana.png", 
                "images/land_food_chain/banded_snake.png", 
                "images/land_food_chain/marine_iquana.png" 
            ],
            animals        : [ 
                "Land Iquana", 
                "Galapagos Banded Snake", 
                "Marine Iquana" 
            ],
            answer : "Land Iquana"
        },
        { 
            question       : "3. Which animal may prey on young land iquanas?",
            images         : [ 
                "images/land_food_chain/blue_footed_booby.png", 
                "images/land_food_chain/banded_snake.png", 
                "images/land_food_chain/vampire_finch.png" 
            ],
            animals        : [ 
                "Blue-footed Booby", 
                "Galapagos Banded Snake", 
                "Vampire Finch" 
            ],
            answer : "Galapagos Banded Snake"
        },
        { 
            question       : "4. Which animal sometimes snacks on snakes?",
            images         : [ 
                "images/land_food_chain/hawk.png", 
                "images/land_food_chain/shark.png", 
                "images/land_food_chain/marine_iquana.png" 
            ],
            animals        : [ 
                "Galapagos Hawk", 
                "Galapagos Shark", 
                "Marine Iquana" 
            ],
            answer : "Galapagos Hawk"
        }
    ],
    
    // store all of the questions and answers for the sea here
    sea  : [
        { 
            question       : "1. Which of these makes its own enery from the sun?",
            images         : [ 
                "images/sea_food_chain/marine_iquana.png", 
                "images/sea_food_chain/bacaloa_grouper.png", 
                "images/sea_food_chain/green_sea_lettuce.png" 
            ],
            animals        : [ 
                "Marine Iquana", 
                "Bacaloa Grouper", 
                "Green Sea Lettuce" 
            ],
            answer : "Green Sea Lettuce"
        },
        { 
            question       : "2. Which of these animals feeds on green sea lettuce?",
            images         : [ 
                "images/sea_food_chain/land_iquana.png", 
                "images/sea_food_chain/razor_surgeonfish.png", 
                "images/sea_food_chain/blue_footed_booby.png" 
            ],
            animals        : [ 
                "Land Iquana", 
                "Razor Surgeonfish", 
                "Blue-footed Booby" 
            ],
            answer : "Razor Surgeonfish"
        },
        { 
            question       : "3. Which animal may prey on Surgeonfish?",
            images         : [ 
                "images/sea_food_chain/flying_fish.png", 
                "images/sea_food_chain/banded_snake.png", 
                "images/sea_food_chain/bacaloa_grouper.png" 
            ],
            animals        : [ 
                "Flying Fish", 
                "Galapagos Banded Snake", 
                "Bacaloa Grouper" 
            ],
            answer : "Bacaloa Grouper"
        },
        { 
            question       : "4. Which animal is greey for groupers?",
            images         : [ 
                "images/sea_food_chain/shark.png", 
                "images/sea_food_chain/blue_footed_booby.png", 
                "images/sea_food_chain/marine_iquana.png" 
            ],
            animals        : [ 
                "Galapgos Shark", 
                "Blue-footed Booby", 
                "Marine Iquana" 
            ],
            answer : "Galapgos Shark"
        }
    ]
}