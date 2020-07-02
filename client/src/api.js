import axios from 'axios';

export default axios.create({
  baseURL: "/v1",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Method': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true
    }
});
