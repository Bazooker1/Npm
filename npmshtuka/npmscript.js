const axios = require('axios');
axios
    .get('https://dota2.ru/forum/threads/milliard-i-eschjo-1-prichina-nikogda-ne-brat-crystal-maiden.1298394/')
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })