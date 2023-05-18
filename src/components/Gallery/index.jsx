import './Gallery.css'
import Card from '../Card'
import jsonData from '../../datas/datas.json'

const Gallery = () => {
    return (
        <ul>
            {jsonData.map((item) => (
                <Card key={item.id} cover={item.cover} title={item.title} />
            ))}
        </ul>
    )
}
export default Gallery
