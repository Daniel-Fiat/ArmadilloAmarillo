import './HomePage.css'
import AdminGobService from '../../services/AdminGob.service'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [advertisements, setAdvertisements] = useState()

    useEffect(() => {

        axios.get('https://administracion.gob.es/web/CanalRSS.do?typeid=3&canalid=1', {
            headers: {
                'Access-Control-Allow-Origin': true,
            },
        })
            .then(advertisements => {
                console.log(advertisements)
            })

        console.log(advertisements)

    },)

    return (
        <>
            <h1>home</h1>
        </>
    )
}
export default Home