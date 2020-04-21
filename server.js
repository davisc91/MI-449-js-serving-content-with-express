var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
var port = process.env.PORT || 8080

app.get('/', function (request, response) {
  response.render('pages/index', {
    aboutSection: aboutSection,
    imageSection: imageSection,
    navSection: navSection
  })
})

app.get('/meg', function (request, response) {
  response.render('pages/meg', {
    aboutSection: aboutSection,
    songSection: songSection,
    imageSection: imageSection,
    navSection: navSection
  })
})

app.get('/lizzo', function (request, response) {
  response.render('pages/lizzo', {
    aboutSection: aboutSection,
    songSection: songSection,
    imageSection: imageSection,
    navSection: navSection
  })
})

app.get('/doja', function (request, response) {
  response.render('pages/doja', {
    aboutSection: aboutSection,
    songSection: songSection,
    imageSection: imageSection,
    navSection: navSection
  })
})

var aboutSection = {}

function createAbout (about) {
  var id = Object.keys(aboutSection).length
  aboutSection[id] = about
}

createAbout({
  homeAboutTitle: 'What is this?',
  homeAboutContent: 'Welcome. This is a fansite for what I believe to be some of the best music artists as of 2020. Click the links above to learn about the artists and see which three songs I think are their best.',
  megAboutTitle: 'About Megan',
  megAboutContent: 'Megan Pete, popularly known as Megan Thee Stallion, is a newly famous rapper. Megan released her first EP, Tina Snow, in 2018, and has been gaining popularity ever since. Megan\'s music is  extremely upbeat, funny, and empowering for women. The artist has won a number of awards, including the BET Hip Hop Award for Best Hot Ticket Performance, the BET Hip Hop Award for Best Mixtape, and the MTV Video Music Award for Best Power Anthem.',
  lizzoAboutTitle: 'About Lizzo',
  lizzoAboutContent: 'Melissa Jefferson, known as Lizzo, is a famous pop singer. Lizzo came out with music in 2016, but did not become mainstream until 2019 with her single \'Truth Hurts\' . Lizzo is so popular due to her highly catchy and inspirational music and unapologetic way of being herself no matter what anyone thinks. Lizzo has won many awards, including a few Grammys and NAACP Image awards.',
  dojaAboutTitle: 'About Doja Cat',
  dojaAboutContent: 'Amalaratna Dlamini, known professionally as Doja Cat, is a singer and rapper. Doja Cat is lovable due to her hilarious and catchy songs. One of her recent songs, \'Say So\', quickly became a hit after it became an extraordinarily popular TikTok song. The song reached number 11 on the US Billboard 200.'
})

var songSection = {}

function createSongSection (songs) {
  var id = Object.keys(songSection).length
  songSection[id] = songs
}

createSongSection({
  megSongsTitle: 'Best Megan Thee Stallion Songs',
  megSongsA: 'Savage',
  megSongsB: 'Big Ole Freak',
  megSongsC: 'Shake That',
  lizzoSongsTitle: 'Best Lizzo Songs',
  lizzoSongsA: 'Truth Hurts',
  lizzoSongsB: 'Good as Hell',
  lizzoSongsC: 'Juice',
  dojaSongsTitle: 'Best Doja Cat Songs',
  dojaSongsA: 'Say So',
  dojaSongsB: 'Candy',
  dojaSongsC: 'Mooo!'
})

var imageSection = {}

function createImageSection (image) {
  var id = Object.keys(imageSection).length
  imageSection[id] = image
}

createImageSection({
  megImage: 'meganimage.jpeg',
  megCaption: 'Megan posing at the American Music Awards.',
  lizzoImage: 'lizzoimage.jpg',
  lizzoCaption: 'Lizzo performing at Radio City Music Hall.',
  dojaImage: 'dojaimage.jpg',
  dojaCaption: 'Doja Cat\'s \'Hot Pink\' album cover.',
  dojaImage2: 'dojaimage2.jpg',
  dojaCaption2: 'Still from Doja Cat\'s music video, \'Mooo!\'. '
})

var navSection = {}

function createNavSection (nav) {
  var id = Object.keys(navSection).length
  navSection[id] = nav
}

createNavSection({
  home: '/',
  meg: '/meg',
  lizzo: '/lizzo',
  doja: 'doja'
})

app.listen(port)
