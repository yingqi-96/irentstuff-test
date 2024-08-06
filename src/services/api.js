import axios from "axios"
import config from "./config"

const {
    apiUrl
} = config;

/* -------------------------------------------------------------------------- */
/*                           SAMPLE AXIOS FUNCTIONS                           */
/* -------------------------------------------------------------------------- */
export async function getTestData(param) {
    const data = await axios({
        method: "GET",
        withCredentials: true,
        url: `${apiUrl}?param=${param}`
    })
} 

export async function postTestData(payload) {
    const data = await axios({
        method: "POST",
        withCredentials: true,
        data: payload,
        url: `${apiUrl}`
    })
} 

export async function putTestData(payload) {
    const data = await axios({
        method: "PUT",
        withCredentials: true,
        data: payload,
        url: `${apiUrl}/${payload.id}`
    })
} 

export async function deleteTestData(id) {
    const data = await axios({
        method: "DELETE",
        withCredentials: true,
        url: `${apiUrl}/${id}`
    })
} 