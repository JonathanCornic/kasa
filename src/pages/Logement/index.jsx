import Carrousel from '../../components/Carrousel'
import { useParams } from 'react-router-dom'
import Data from '../../datas/datas.json'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import AuthorCard from '../../components/AuthorCard'
import './Logement.css'

const Logement = () => {
    const { id } = useParams()
    const selectedData = Data.find((item) => item.id === id)

    return (
        <>
            <header>
                <Carrousel pictures={selectedData.pictures} />
            </header>
            <main>
                <div className='container-titre'>
                    <h1>{selectedData.title}</h1>
                    <h2>{selectedData.location}</h2>
                    <Tag tags={selectedData.tags} />
                </div>
                <div className='container-rating-author'>
                    <AuthorCard
                        key={`${selectedData.id}-name`}
                        picture={selectedData.host.picture}
                        name={selectedData.host.name}
                    />
                    <Rating rating={selectedData.rating} />
                </div>
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
