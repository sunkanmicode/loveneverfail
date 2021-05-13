const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];

const wedDate = document.querySelector('.wed-date');
const outcome = document.querySelector('h3');
const countDown = document.querySelectorAll('.time p');


const futureDate = new Date(2021, 4, 29, 11, 00, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate()
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];


wedDate.innerHTML = `Date: ${weekday}  ${date}th ${month} ${year}, ${hours}:0${mins}am`

const futureTime = futureDate.getTime();


const getCountDownStart = () => {
  const today = new Date().getTime();
  const countDate = futureDate - today;

  // 1s = 1000
  // 1m = 60s
  // 1h = 60m
  // 1d = 24

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  const days = Math.floor(countDate / oneDay);
  const hours = Math.floor((countDate % oneDay) / oneHour);
  const mins = Math.floor((countDate % oneHour) / oneMin);
  const secs = Math.floor((countDate % oneMin) / 1000);


  const value = [days, hours, mins, secs];

  const format =(item)=>{
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  countDown.forEach((item, index) => {
    return item.innerHTML = format(value[index])
  });

  if(countDate < 0){
    clearInterval(counter)
    deadline.innerHTML = `<h1>Congraduations  <br> Mr and Mrs Adegoke</h1>`
  }
   
};
const counter = setInterval(getCountDownStart, 1000);
getCountDownStart();



const photoGallery = document.querySelector('.photo-gallery');
const bestiesGallery = document.querySelector('.besties-gallery');



const pictures = [
 
  {
    id: 6,
    category: "intro",
    image: "./img/pic (4).jpg"
  },
  {
    id: 7,
    category: "intro",
    image: "./img/pic (14).jpg"
  },
  {
    id: 8,
    category: "intro",
    image: "./img/pic (11).jpg"
  },
  {
    id: 9,
    category: "intro",
    image: "./img/pic (5).jpg"
  },
  {
    id: 14,
    category: "intro",
    image: "./img/pic (12).jpg"
  },
  {
    id: 15,
    category: "All",
    image: "./img/pic (2).jpg"
  },
  {
    id: 16,
    category: "All",
    image: "./img/pic (6).jpg"
  },
  {
    id: 3,
    category: "All",
    image: "./img/pic (9).jpg"
  },
  {
    id: 4,
    category: "All",
    image: "./img/pic (8).jpg"
  },
  {
    id: 10,
    category: "intro",
    image: "./img/pic (3).jpg"
  },
  {
    id: 13,
    category: "intro",
    image: "./img/pic (7).jpg"
  },
  
  {
    id: 5,
    category: "All",
    image: "./img/pic (10).jpg"
  },
  // {
  //   id: 5,
  //   category: "All",
  //   image: "./img/pic (12).jpg"
  // },
];
const besties = [
  {
    id: 1,
    images: "./img/adetayo2.jpeg",
    name: "Adetayo"
  },
  {
    id: 2,
    images: "./img/busola.jpg",
    name: "Busola"
  },
  {
    id: 3,
    images: "./img/Elizabeth.jpeg",
    name: "Elizabeth"
  },
  {
    id: 4,
    images: "./img/lolade.jpeg",
    name: "Ope"
  },
  {
    id: 5,
    images: "./img/ope.jpeg",
    name: "Lolade"
  },
  {
    id: 11,
    images: "./img/tolu2.jpg",
    name: "Tolu"
  },
  
  {
    id: 6,
    images: "./img/m1.jpg",
    name: "Ojewande"
  },
  {
    id: 7,
    images: "./img/m2.jpg",
    name: "Akintola"
  },
  {
    id: 9,
    images: "./img/abiodun.jpg",
    name: "Abiodun"
  },
  {
    id: 10,
    images: "./img/ido.jpg",
    name: "Ido"
  },
  {
    id: 11,
    images: "./img/emma.jpg",
    name: "Emmanuel"
  },
  {
    id: 12,
    images: "./img/empty.jpg",
    name: "Name"
  },
  
];
const data =[
  {
    image: 'img/Pic1.jpg',
    para: 
    "For us, our meeting was not the ordinary but that of divine connection meeting with destiny.It all started in Kiev, Ukraine. Tolu originally lived in Ivano-Frankivisk,Ukraine (Western Ukraine) while Ade lived in Kiev (the capital, North-central Ukraine).You can see the distance.Tolu’s parent happened to have come to visit her younger brother and herself. And on the day they boarded their flight back to Nigeria was the day of the divine connection.That faithful evening, on a normal day he won’t come to KFC - his routine was work and home. He was there to meet a friend and treat him as well. And as for her, she was a regular customer at KFC whenever she’s at Kiev."
  },
  {
    image: "img/pic (1).jpg",
    para: "She was on the queue to get some food when an African man came in speaking Yoruba on the phone. She looked back like, this is a public place. Then continued waiting to be attended to then got her meal went to her seat to wait for the train. She was to return to her city that evening. He walked up to me, asked for my name, told him my English name then he asked for my surname, I was very reluctant because I knew he was going to react like so you’re Yoruba. Which he did, he then started talking to me in Yoruba, asking for the state I’m from, I told him. He then requested for my contact, I only gave him because he was well dressed (which he jokingly teases me about, he tells his siblings and friends if you want a lady from Ogun State like his, just go and wear a blazer, shirt and trousers. He would say, nkan to ma je wan niyen)."
  },
  {
    image: "img/Pic2.jpg",
    para: "Anyways, the next morning he called her early in the morning (around 8-9am), she was already in her destination. She felt it was too early so intentionally didn’t pick the call. She called back at noon, he replied that he couldn’t speak then, he would call back later in the day. Tolu took it personal, thinking he was reciprocating her attitude towards him but he was actually busy then. He called later at night, we spoke for hours. From there we built friendship to what we are about to celebrate in May 29th."
  },
  {
    image: "img/pic (14).jpg",
    para: "It’s really been a journey of God’s faithfulness, understanding, patience, faith, hope and above all Love. We’re deeply grateful to God for divinely connecting us. We weren’t supposed to be where we were when we met. We were both done with medical school years back but to fulfill God’s perfect will for our lives, our lives went through the journey it did. Our deepest appreciation to God for making TOLU + ADE a reality and those he placed in our lives as counselors."
  }
  
];

const parag = document.querySelector('.para');
console.log(parag);
const storyImg = document.querySelector('.img-story');
console.log(storyImg);

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentDate = 0;


window.addEventListener('DOMContentLoaded', ()=>{
  displayPictures(currentDate);
 
  
});

const displayPictures = (story) =>{
  const displayPic = pictures.map((pic) =>{
    return `<div class="col-4">
            <img src="${pic.image}" alt="">
            </div> `
  });
  const displayPhoto = besties.map((photo) =>{
    return `<div class="col-3">
            <img src="${photo.images}" alt="">
            <p>${photo.name}</p>
            </div> `
  })
  showPhoto = displayPhoto.join('')
    bestiesGallery.innerHTML = showPhoto;
  showPicture = displayPic.join('')
    photoGallery.innerHTML = showPicture;

    const item = data[story];
    parag.innerHTML = item.para;
    storyImg.src = item.image;

}
nextBtn.addEventListener('click', ()=>{
  currentDate++;
  // if(currentDate > data.length -1){
  //   currentDate = 0;
  // }
  displayPictures(currentDate);
});
prevBtn.addEventListener('click', ()=>{
  currentDate--;
  displayPictures(currentDate);
})

// const showStories = (stories) =>{
//   const item = data[stories];
//   para.innerHTML = item.para;
//   storyImg.src = item.image;
// }