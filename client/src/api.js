import axios from 'axios';

export default axios.create({
  baseURL: "/v1",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
});
