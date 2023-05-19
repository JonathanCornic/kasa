import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import Data from '../../datas/datas.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import AuthorCard from '../../components/AuthorCard'

const Logement = () => {
    const { id } = useParams()
    const selectedData = Data.find((item) => item.id === id)

    return (
        <>
            <header>
                <Carrousel pictures={selectedData.pictures} />
            </header>
            <main>
                <h1>{selectedData.title}</h1>
                <h2>{selectedData.location}</h2>
                <AuthorCard
                    key={`${selectedData.id}-name`}
                    picture={selectedData.host.picture}
                    name={selectedData.host.name}
                />
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
                                <li
                                    key={`${selectedData.id}-equipment-${index}`}
                                >
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
