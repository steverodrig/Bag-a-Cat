import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getCats: function() {
        return axios.get("/v1/cats");
    },
    getCatDetails: function(id) {
        return axios.get(`/v1/cat/${id}`);
    }
};