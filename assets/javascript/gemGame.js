$(document).ready(function() {
            // ok create some Global game variables 
            var wins = 0;
            var loses = 0;

            var totalScore = 0;
            var randomNo = 0

            // Now the Gem Variables 
            var purpleNum = 0
            var goldNum = 0
            var blueNum = 0
            var diamondNum = 0

            // *** defines "restart" function 
            function restart() {

                totalScore = 0
                $("#totalScore").text(0); //query html and insert 0 for new game 

                var randomNo = 0; 
                $("#randomNum").text(0); //query html and insert 0 for new game 

                var purpleNum = 0
                var goldNum = 0
                var blueNum = 0
                var diamondNum = 0
                game() // run game function -- defined below 
            }


            // *** defines "SCORE" function" verify win vs loss based on total score for player 
            function score() {
                if (totalScore === numRandom) {
                    alert("You win!! Nice work!!");
                    wins++;
                    restart();
                }
                if (totalScore > numRandom) {
                    alert("You lose, Awww... you suck again!");
                    loses++;
                    restart();
                }
            }

            //*** defines "GAME" function" creates random # and random values for gems 
            function game() {
                //create random number for game 
                var randomNo = Math.ceil(Math.random()* 50) + 20; // Random # between 20 and 50 
                numRandom = randomNo; //create local variable 
                $("#randomNum").text(numRandom); //Query html insert the Random # selected 
                console.log(numRandom);


                //var to create random number locally for each gem
                var purpleNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9
                var goldNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9
                var blueNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9
                var diamondNum = Math.floor(Math.random() * 9 + 1); // Random # between 1 and 9


                $("#winsScore").text(wins); // query html insert wins 
                $("#losesScore").text(loses); // query html insert loses 


                // query on click total score for "Purple gem"
                $("#purple").on("click", function() {
                    totalScore = totalScore + purpleNum;
                    console.log("purple number is: " + purpleNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })

                // query on click total score for "Gold gem"
                $("#gold").on("click", function() {
                    totalScore = totalScore + goldNum;
                    console.log("gold number is: " + goldNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })

                // query on click total score for "blue gem"
                $("#blue").on("click", function() {
                    totalScore = totalScore + blueNum;
                    console.log("blue number is: " + blueNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })

                  // query on click total score for "Diamond"
                $("#diamond").on("click", function() {
                    totalScore = totalScore + diamondNum;
                    console.log("Diamond is: " + diamondNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })


            }

            game()
        });
