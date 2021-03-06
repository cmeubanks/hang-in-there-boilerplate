// query selector variables go here 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

//main page poster elements
var posterImage = document.querySelector('img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

//section elements & pages
var mainPoster = document.querySelector('.main-poster');
var posterForm = document.querySelector('.poster-form');
var savedPoster = document.querySelector('.saved-posters');

//for the make your own poster form
var imageCustom = document.getElementById('poster-image-url');
var titleCustom = document.getElementById('poster-title');
var quoteCustom = document.getElementById('poster-quote');

//all the buttons
var buttons = {
  savePoster: document.querySelector('.save-poster'),
  showSaved: document.querySelector('.show-saved'),
  random: document.querySelector('.show-random'),
  makeYourOwn: document.querySelector('.show-form'),
  makePoster: document.querySelector('.make-poster'),
  nevermindShowMain: document.querySelector('.show-main'),
  backToMain: document.querySelector('.back-to-main'),
};

var savedPosters = [];
var currentPoster;
var miniPoster = document.querySelector('.mini-poster');

//saved posters section
//article element
var savedParent = document.querySelector('.saved-posters-grid');

// event listeners go here 👇
window.addEventListener('load', randomizePoster);
window.addEventListener('dblclick', deletePoster)
buttons.random.addEventListener('click', randomizePoster);
buttons.makeYourOwn.addEventListener('click', makeOwnShow);
buttons.showSaved.addEventListener('click', showSavedShow);
buttons.nevermindShowMain.addEventListener('click', showMain);
buttons.backToMain.addEventListener('click', showMain);
buttons.makePoster.addEventListener('click', customizePoster);
buttons.savePoster.addEventListener('click', savePoster);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayPoster(imageUrl, title, quote) {
  posterImage.src = imageUrl;
  posterTitle.innerText = title;
  posterQuote.innerText = quote;
  currentPoster = new Poster(imageUrl, title, quote);
  event.preventDefault();
};

function randomizePoster() {
  var arrays = [images, titles, quotes];
  var randomPieces = []
  for (var i = 0; i < arrays.length; i++) {
    randomPieces.push(arrays[i][getRandomIndex(arrays[i])]);
  };
  displayPoster(randomPieces[0], randomPieces[1], randomPieces[2]);
};

function customizePoster() {
  var posterElements = [images, titles, quotes];
  var posterValues = [imageCustom, titleCustom, quoteCustom];
  displayPoster(imageCustom.value, titleCustom.value, quoteCustom.value);
  for (var i = 0; i < posterElements.length; i++) {
    addToArray(posterElements[i], posterValues[i].value);
  };
  showMain();
};

function hide(pageShow, pageHide1, pageHide2) {
  pageHide1.classList.add('hidden');
  pageHide2.classList.add('hidden');
  pageShow.classList.remove('hidden');
};

function makeOwnShow() {
  hide(posterForm, mainPoster, savedPoster)
};

function showSavedShow() {
  hide(savedPoster, posterForm, mainPoster)
};

function showMain() {
  hide(mainPoster, savedPoster, posterForm)
};

function addToArray(arr, item) {
  if (!arr.includes(item)) {
    arr.push(item);
  };
};

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    addToArray(savedPosters, currentPoster);
    var id = currentPoster.id;
    var imageURL = currentPoster.imageURL;
    var title = currentPoster.title;
    var quote = currentPoster.quote;
    var sectionOpen = `<section class='mini-poster' id="${id}">`;
    var imgElement = `<img id=${id} src=${imageURL}>`;
    var h2Element = `<h2 id=${id}>${title}</h2>`;
    var h4Element = `<h4 id=${id}>${quote}</h4>`;
    var sectionClose = `</section>`;
    savedParent.innerHTML += sectionOpen + imgElement + h2Element + h4Element + sectionClose;
  };
};

function deletePoster() {
  var id = event.target.getAttribute('id');
  var deleteTarget = document.getElementById(id);
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id == id) {
      deleteTarget.remove();
      savedPosters.splice(i, 1)
    };
  };
};
