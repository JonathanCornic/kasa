import { useParams } from 'react-router-dom'
import Data from '../../datas/datas.json'
import Carrousel from '../../components/Carrousel/Carrousel.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import AuthorCard from '../../components/AuthorCard/AuthorCard.jsx'
import './Housing.css'

const Housing = () => {
    const { id } = useParams()
    const selectedData = Data.find((item) => item.id === id)

    return (
        <>
            <header className="housing-header">
                <div className="carrousel-container">
                    <Carrousel pictures={selectedData.pictures} />
                </div>
            </header>
            <main className="housing-main">
                <section className="info-container">
                    <div className="title-container">
                        <h1>{selectedData.title}</h1>
                        <h2>{selectedData.location}</h2>
                        <div className="tag-container">
                            <Tag tags={selectedData.tags} />
                        </div>
                    </div>
                    <div className="rating-author-container">
                        <div className="author-card-container">
                            <AuthorCard
                                key={`${selectedData.id}-name`}
                                picture={selectedData.host.picture}
                                name={selectedData.host.name}
                            />
                        </div>

                        <div className="rating-container">
                            <Rating rating={selectedData.rating} />
                        </div>
                    </div>
                </section>
                <div className="housing-collapse-container">
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

export default Housing
