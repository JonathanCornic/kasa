import './Gallery.css'
import Card from '../Card'
import jsonData from '../../datas/datas.json'

const Gallery = () => {
    return (
        <div className="gallery">
            <ul className="gallery-ul">
                {jsonData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        cover={item.cover}
                        title={item.title}
                    />
                ))}
            </ul>
        </div>
    )
}
export default Gallery
