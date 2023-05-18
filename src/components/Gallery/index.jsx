import './Gallery.css'
import Card from '../Card'
import jsonData from '../../datas/datas.json'

const Gallery = () => {
    return (
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
    )
}
export default Gallery
