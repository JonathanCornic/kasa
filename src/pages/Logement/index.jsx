import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import Data from '../../datas/datas.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

const Logement = () => {
    const { id } = useParams()
    const selectedData = Data.find((item) => item.id === id)

    return (
        <>
            <header>
                <Carrousel pictures={selectedData.pictures} />
            </header>
            <main>
                <h2>{selectedData.title}</h2>
                <p>{selectedData.location}</p>
                <Tag tags={selectedData.tags} />
                <Rating rating={selectedData.rating} />
                <Collapse
                    key={`${selectedData.id}-description`}
                    title="Description"
                    content={selectedData.description}
                />
                <Collapse
                    key={`${selectedData.id}-equipments`}
                    title="Équipements"
                    content={
                        <ul>
                            {selectedData.equipments.map((equipment, index) => (
                                <li key={`${selectedData.id}-${index}`}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    }
                />
            </main>
        </>
    )
}

export default Logement
