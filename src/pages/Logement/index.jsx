import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import jsonData from '../../datas/datas.json'

const Logement = () => {
    const { id } = useParams()
    const selectedData = jsonData.find((item) => item.id === id)
    return (
        <>
            <header>
                <Carrousel pictures={selectedData.pictures} />
            </header>
            <main>
                <h2>{selectedData.title}</h2>
                <p>{selectedData.location}</p>
                <p>{selectedData.tags}</p>
            </main>
        </>
    )
}
export default Logement
