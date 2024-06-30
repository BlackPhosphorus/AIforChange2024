import axios from 'axios';
import { IP_ADDRESS } from './config';

console.log(`http://${IP_ADDRESS}/data`);

var bodyFormData = new FormData();
bodyFormData.append('LonLatData', JSON.stringify([34.2, 22.9]));

let data = null;

axios({
    method: "post",
    url: `http://${IP_ADDRESS}/data`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
})
    .then(function (response) {
    data = response.data;
})

console.log(data);