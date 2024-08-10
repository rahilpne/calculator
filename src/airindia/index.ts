import axios from 'axios';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api-loyalty.airindia.com/loyalty-core/v4/get-points?origin=BOM&destination=DEL&classType=ECO&journeyType=OW&carrierCode=AI&tierLevel=BAS',
  headers: { 
    'accept': 'application/json', 
    'access-control-allow-origin': '*', 
    'content-type': 'application/json', 
    'ocp-apim-subscription-key': '28af0a775f704c09a792c92d090535e8', 
    'origin': 'https://www.airindia.com', 
    'referer': 'https://www.airindia.com/', 
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
