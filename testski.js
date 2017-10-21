const axios = require('axios');

axios.post('/auth/signup/help', {
    email: 'jakub@jakub.jakub',
    password: 'fuck',
}).catch(err => console.log(err))