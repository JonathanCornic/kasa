import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import jsonData from '../../datas/datas.json'
import Tag from '../../components/Tag'

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
                <Tag tags={selectedData.tags} />
            
            </main>
        </>
    )
}
export default Logement
