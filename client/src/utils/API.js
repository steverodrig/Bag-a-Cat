import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getCats: function() {
        return axios.get("/v1/cats");
    },
    getCatDetails: function(id) {
        return axios.get(`/v1/cat/${id}`);
    },
    putAdoptedState: function(id) {
        return axios.put(`/v1/cat/${id}`, {adopted: true});
    },
    putAdoptedFalse: function(id) {
        return axios.put(`/v1/cat/${id}`, {adopted: false});
    },
    getApps: function() {
        return axios.get("/v1/catApps");
    }
};