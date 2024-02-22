import axios, { AxiosError, AxiosResponse } from "axios";
import { URL } from "./DefaultURL";

const axiosObj = axios.create({
    baseURL: URL.base_url
});

function onSuccess(response: AxiosResponse) {
    // if (__DEV__) {
    //     console.log('onSuccess', response.data);
    // }
    return response.data;
}
function onError(response: AxiosError) {
    // if (__DEV__) {
    //     console.log('onError', response);
    // }
    return response
}

const APIs = {
    getFlights: (url: string) => axiosObj.get(URL.base_url + url).then(onSuccess, onError),
}

export { APIs };


//Logs
axiosObj.interceptors.request.use(
    request => {
        // console.log(request.url, "----- request ----->", request.data)
        return request
    },
)
axiosObj.interceptors.response.use(
    response => {
        // console.log(response.config.url, "+++++ response +++++>", response.data);
        return response
    },
)