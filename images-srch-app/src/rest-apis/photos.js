import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8089',
    //headers: {
    //    Authorization: 'Client-ID vlPcuQtdQgqaqUD-UlGKgCaSBCIUP8kbcYXJUBq9R0s'
    //}
});
