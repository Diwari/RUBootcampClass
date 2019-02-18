
let loses = 0;
let wins = 0;
let currentNum;
let targetNumber;



$( "#target").text(targetNumber);
targetNumber = Math.floor(Math.random() * 101 ) + 19; 
console.log(targetNumber) 

currentNum = 0;

var crystalNums = [
    Math.floor(Math.random() * 11) + 1,
    Math.floor(Math.random() * 11) + 1,
    Math.floor(Math.random() * 11) + 1,
    Math.floor(Math.random() * 11) + 1
];
console.log(crystalNums);

for (let i = 0; i < crystalNums.length-3; i++){
    
    let blmCrystal = $("<img>");
    blmCrystal.addClass( "crystal-image" );
    blmCrystal.attr("src", "assets/images/BLM_Soul_Crystal.png");
    blmCrystal.attr("data-crystalvalue", crystalNums[0]);

    let pldCrystal= $("<img>");
    pldCrystal.addClass( "crystal-image");
    pldCrystal.attr("src", "assets/images/PLD_Soul_Crystal.png");
    pldCrystal.attr("data-crystalvalue", crystalNums[1])
    let smnCrystal = $("<img>");
    smnCrystal.addClass("crystal-image");
    smnCrystal.attr("src", "assets/images/SMN_Soul_Crystal.png");
    smnCrystal.attr("data-crystalvalue", crystalNums[2])
    let warCrystal = $("<img>");
    warCrystal.addClass("crystal-image");
    warCrystal.attr("src", "assets/images/WAR_Soul_Crystal.png");
    warCrystal.attr("data-crystalvalue", crystalNums[3])

    $(".crystals").append(blmCrystal);
    $(".crystals").append(pldCrystal);
    $(".crystals").append(smnCrystal);
    $(".crystals").append(warCrystal);
}
$(".crystal-image").on("click", function(){
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    currentNum += crystalValue;
    $( "#current" ).html( "Your Current Guess Is:" + currentNum);

    if ( currentNum === targetNumber){
        wins ++;
        $( "#wins" ).html("Wins: " + wins );
        console.log("Winner is you");
    }

    else if( currentNum >= targetNumber ){
        loses ++;
        $( "#loses").html("Loses: " + loses );
        console.log("Try again kid");
    }

});


