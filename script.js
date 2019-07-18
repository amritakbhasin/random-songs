
// console.log("works");


var regret = [
  "Someone Like You by Adele",

  // <a href= "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg">Someone Like You by Adele</a>,
  //
  "Let Her Go by Passenger",
  "Another Love by Tom Odell",
  "Shape of You by Ed Sheeran",
  "Without Me by Halsey",
  "What About Us by P!nk",
  "Meant to Be by Bebe Rexha",
  "Let Me Love You by DJ Snake",
  "Treat You Better by Shawn Mendes",
  "I'll Never Love Again by Lady Gaga",
  "Viva La Vida by Coldplay",
  "Wake Me Up by Avicii",
  "Without You by Avicii"
]

  var confused = [
"Complicated by Avril Lavigne",
"Fireflies by Owl City",
"Shallow by Lady Gaga",
"Issues by Julia Michaels",
"Million Reasons by Lady Gaga",
"Paparazzi by Lady Gaga",
"When You're Gone by Avril Lavigne",
"Where Have You Been by Rihanna",
"Drunk in Love by Beyoncé",
"What Do You Mean? by Justin Bieber",
"Wish You Were Gay by Billie Eilish",
"Clocks by Coldplay"
]


var oldiesButGoodies = [
  "All Star by Smash Mouth",
  "Friday by Rebecca Black",
  "Fireworks by Katy Perry",
  "Dynamite by Tao Cruz",
  "TiK ToK by Kesha",
  "California Gurls by Katy Perry",
  "What Makes You Beautiful by One Direction",
  "Girls Just Wanna Have Fun by Cyndi Lauper",
"Pocketful of Sunshine by Natasha Bedingfield",
"Unwritten by Natasha Bedingfield",
"I Gotta Feeling by the Black Eyed Peas",
"Baby One More Time by Britney Spears",
"Oops... I Did it Again by Britney Spears",
"We Found Love by Rihanna",
"Halo by Beyoncé",
"One Time by Justin Bieber"
]

var fightingBack = [
"Reputation by Taylor Swift",
"Rainbow by Kesha",
"Make Me Wanna Die by The Pretty Reckless",
"Bad Liar by Selena Gomez",
"Look What You Made Me Do by Taylor Swift",
"Nightmare by Halsey",
"Praying by Kesha",
"Sorry Not Sorry by Demi Lovato",
"Rich, White, Straight Men by Kesha",
"This is America by Donald Glover",
"God is a Woman by Ariana Grande",
"Price Tag by Jessie J",
"I Will Survive by Gloria Gaynor",
"You Should See Me in a Crown by Billie Eilish"
]

var onTopOfTheWorld = [
  "What Doesn't Kill You Makes You Stronger by Kelly Clarkson",
  "Love Yourself by Hailee Steinfield",
  "Classic by MKTO",
  "Best Day of My Life by American Authors",
  "Feel It Still by Portugal. The Man",
  "Shut Up and Dance by Walk the Moon",
  "Shake it Off by Taylor Swift",
  "The Edge of Glory by Lady Gaga",
  "Single Ladies by Beyoncé",
  "Love Yourself by Justin Bieber"
]

function randNum1(array) {
  var randDeci = Math.random();
  var randBig = randDeci*array.length;
  var random = Math.floor(randBig);
  return random
}


//first button
buttons1= document.getElementById("reg");
buttons1.addEventListener("click", function(){
  var songs1 = randNum1(regret)
  changeSong(firstbutton, regret, songs1);
})

randNum1(regret)

// function changeSong(someSong){
//   var newSong = document.getElementById('firstbutton');
//   firstbutton.innerHTML = regret[someSong];
// }

//second button
buttons2= document.getElementById("confus");
buttons2.addEventListener("click", function(){
  var songs2 = randNum1(confused)
  changeSong(secondbutton, confused, songs2);
})

randNum1(confused)

// function changeSong(someSong){
//   var newSong = document.getElementById('secondbutton');
//   secondbutton.innerHTML = confused[someSong];
// }

//third buttons
buttons3= document.getElementById("oldies");
buttons3.addEventListener("click", function(){
  var songs3 = randNum1(oldiesButGoodies)
  changeSong(thirdbutton, oldiesButGoodies, songs3);
})


randNum1(oldiesButGoodies)

// function changeSong(someSong){
//   var newSong = document.getElementById('thirdbutton');
//   thirdbutton.innerHTML = oldiesButGoodies[someSong];
// }

//fourth buttons
buttons4= document.getElementById("top");
buttons4.addEventListener("click", function(){
  var songs4 = randNum1(onTopOfTheWorld)
  changeSong(fourthbutton, onTopOfTheWorld, songs4);
})

randNum1(onTopOfTheWorld)

function changeSong(button, songName, someSong){
  var newSong = document.getElementById('fourthbutton');
  button.innerHTML = songName[someSong];
}

buttons5= document.getElementById("fight");
buttons5.addEventListener("click", function(){
  var songs5 = randNum1(fightingBack)
  changeSong(fifthbutton, fightingBack, songs5);
})

/*var number2 = randNum1(confused);
var number3 = randNum1(onTopOfTheWorld);
var number4 = randNum1(oldiesButGoodies);*/

// var txt = document.getElementById('txt')



/* buttons2.addEventListener("click", function()
{
var confus = document.getElementById('confus');
confus.innerHTML = confused[number2];
}

buttons3.addEventListener("click", function()
{
var oldies = document.getElementById('oldies');
oldies.innerHTML = onTopOfTheWorld [number3];
}

buttons4.addEventListener("click", function()
{
var top = document.getElementById('top');
top.innerHTML = oldiesButGoodies[number4);
}
*/

// function change (some)
// {
//   var newDoc = document.getElementById("placeholder")
//   placeholder.innerHTML = oldiesButGoodies[some]
// }
