import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer WGQw7WgbSS3H-OjUjfs0sE736Xo6hf_hExM4pVRRP8zaX3InC0Csma-051aSwGJXeZZ1lKbeG7GIxLXTJasHzoFgYlNdLCZci_wEFL0uen5OW_yZTWGIhpV29j8IYHYx'
    }
});