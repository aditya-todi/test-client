import * as axios from 'axios'

const SERVER_URL = "http://localhost:5000"
const API = "/medicine"

const getMedicines = () => {
    return axios.get(SERVER_URL + API)
}

const addMedicine = medicine => {
    return axios.post(SERVER_URL + API, medicine)
}

const deleteMedicine = id => {
    return axios.delete(SERVER_URL + API + `/${id}`)
}

export default {
    getMedicines,
    addMedicine,
    deleteMedicine
}