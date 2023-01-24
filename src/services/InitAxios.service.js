import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://administracion.gob.es/`
        })
    }
}
export default InitAxios