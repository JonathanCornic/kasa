import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import bannerImage from '../../assets/banner-home.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
            <header className="banner-header">
                <Banner
                    title="Chez vous, partout et ailleurs"
                    image={bannerImage}
                />
            </header>
            <main className="gallery-main">
                <Gallery />
            </main>
        </>
    )
}

export default Home
