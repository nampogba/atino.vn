import axios from "axios";
// import interceptors from "./interceptors";

const http = axios.create({
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default http;
