import InitAxios from "./InitAxios.service";

class GobAPI extends InitAxios {
    constructor() {
        super('web/')
    }
    getAll() {

        return this.axios.get('/CanalRSS.do?typeid=3&canalid=1')
            .then(response => response.data)
            .catch({ error: "error" })

    }
}
export default new GobAPI