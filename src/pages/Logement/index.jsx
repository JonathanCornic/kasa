import Carouselle from '../../components/Carouselle'
import { useParams } from 'react-router-dom'
import jsonData from '../../datas/datas.json'

const Logement = () => {
    const { id } = useParams()
    const selectedData = jsonData.find((item) => item.id === id)
    return (
        <>
            <header>
                <Carouselle pictures={selectedData.pictures} />
            </header>
            <main>
                <h2>{selectedData.title}</h2>
                
            </main>
        </>
    )
}
export default Logement
