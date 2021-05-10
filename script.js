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

//stories
// let curentActive = 1;
// const story = document.querySelector(".story");
// const prevBtn = document.querySelector(".prevBtn");
// const nextBtn = document.querySelector(".nextBtn");

// const displayActive = document.querySelectorAll(".story-btn");

// nextBtn.addEventListener("click", ()=>{
  
//     curentActive++;
  
  
//   console.log(nextBtn);
// })

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
    images: "./img/empty.jpg",
    name: "Name"
  },
  {
    id: 12,
    images: "./img/empty.jpg",
    name: "Name"
  },
  {
    id: 12,
    images: "./img/empty.jpg",
    name: "Name"
  },
]


window.addEventListener('DOMContentLoaded', ()=>{
  displayPictures();
  
});

const displayPictures = () =>{
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
}