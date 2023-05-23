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
                <section className="container-info">
                    <div className="container-titre">
                        <h1>{selectedData.title}</h1>
                        <h2>{selectedData.location}</h2>
                        <div className="tag-container">
                            <Tag tags={selectedData.tags} />
                        </div>
                    </div>
                    <div className="container-rating-author">
                        <figure className="author-card-container">
                            <AuthorCard
                                key={`${selectedData.id}-name`}
                                picture={selectedData.host.picture}
                                name={selectedData.host.name}
                            />
                        </figure>
                        <div className="rating-container">
                            <Rating rating={selectedData.rating} />
                        </div>
                    </div>
                </section>
                <div className="collapse-container-logement">
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
                                {selectedData.equipments.map(
                                    (equipment, index) => (
                                        <li
                                            key={`${selectedData.id}-equipment-${index}`}
                                        >
                                            {equipment}
                                        </li>
                                    )
                                )}
                            </ul>
                        }
                    />
                </div>
            </main>
        </>
    )
}

export default Logement
