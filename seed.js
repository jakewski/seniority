const Helper = require('./models/helper');
const Helpee = require('./models/helpee');
const Jobs = require('./models/jobs');

const helpees = [
    {
        name: 'Agnes Smith',
        email: 'agnes@gmail.com',
        password: 'ineedhelp',
        location: [39.961180, -76.722357],
    },
    {
        name: 'Bill Johnshon',
        email: 'bjohnson@gmail.com',
        password: 'pleasejusthelp',
        location: [39.965522, -76.724267],
    },
    {
        name: 'John Jameson',
        email: 'jjames@gmail.com',
        password: 'yohelpmefam',
        location: [39.960983, -76.727550],
    },
    {
        name: 'Phil Jackson',
        email: 'pjack@gmail.com',
        password: 'forrealsomeonebetterhelpmesoon',
        location: [39.961493, -76.719782],
    },
    
]
const helpers = [
    {
        name: 'Jakub Grzegorzewski',
        email: 'jakewski@gmail.com',
        password: 'jakubisdope',
        availability: true,
        skills: ['dank memes', 'software development'],
        location: [39.961197, -76.728666],
        radius: 5,
        rating: 0.7,
        price: 10,
        photo: 'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/dogelog.jpg',

    },
        {
        name: 'Colin Walsh',
        email: 'colin@islit.com',
        password: 'this is cool',
        availability: false,
        skills: ['swaggin', 'helping seniors', 'cleaning gutters'],
        location: [39.963614, -76.733537],
        radius: 10,
        rating: 0.1,
        price: 20,
        photo: 'https://s7d2.scene7.com/is/image/PetSmart/PB1801_FEAT_PROD-CatTile-20170130?$CL0404$',

    },
        {
        name: 'Artur Byra1',
        email: 'artur@gmail.com',
        password: 'jakubisstilldope',
        availability: true,
        skills: ['lifting heavy stuff', 'mowing lawns'],
        location: [39.972957, -76.736670],
        radius: 6,
        rating: 0.94,
        price: 13,
        photo: 'https://www.petbasics.com/static/media/images/education/Hero-CatInside-565px.jpg',

    },
        {
        name: 'Artur Byra2',
        email: 'artur@gmail.com',
        password: 'jakubisstilldope',
        availability: true,
        skills: ['lifting heavy stuff', 'mowing lawns'],
        location: [39.963840, -76.728475],
        radius: 6,
        rating: 0.94,
        price: 13,
        photo: 'https://www.petbasics.com/static/media/images/education/Hero-CatInside-565px.jpg',

    },
        {
        name: 'Artur Byra3',
        email: 'artur@gmail.com',
        password: 'jakubisstilldope',
        availability: true,
        skills: ['lifting heavy stuff', 'mowing lawns'],
        location: [39.962896, -76.729406],
        radius: 6,
        rating: 0.94,
        price: 13,
        photo: 'https://www.petbasics.com/static/media/images/education/Hero-CatInside-565px.jpg',

    },
        {
        name: 'Artur Byra4',
        email: 'artur@gmail.com',
        password: 'jakubisstilldope',
        availability: true,
        skills: ['lifting heavy stuff', 'mowing lawns'],
        location: [39.962679,  -76.727986],
        radius: 6,
        rating: 0.94,
        price: 13,
        photo: 'https://www.petbasics.com/static/media/images/education/Hero-CatInside-565px.jpg',

    }
]

const jobs = [
    {
        name: 'Mow Lawn',
        description: 'looking for someone to mow a small lawn (1/4 acre)',
        helpeeId: 1,
    },
    {
        name: 'Clean Gutters',
        description: 'looking for someone to clean the leaves out of my gutters',
        helpeeId: 1,
    },
    {
        name: 'Clean Garage',
        description: 'need someone strong to lift the heavy boxes in my garage',
        helpeeId: 2,
    },
    {
        name: 'Gardening Help',
        description: 'need someone with gardening experience to help with tricky weeds',
        helpeeId: 3,
    },
    {
        name: 'Carpet Mess',
        description: 'spilt wine on carpet, need help scrubbing out the stain',
        helpeeId: 4,
    },
]

helpers.forEach(helper => {
    Helper.create(helper)
})

helpees.forEach(helpee => {
    Helpee.create(helpee)
})

setTimeout(() => {
    jobs.forEach(job => {
        Jobs.create(job)
    })
}, 1000)


