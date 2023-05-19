import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import jsonData from '../../datas/datas.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

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
                <Rating rating={selectedData.rating}/>
                <Collapse description={selectedData.description}/>
                <Collapse equipements={selectedData.equipements}/>
            
            </main>
        </>
    )
}
export default Logement
