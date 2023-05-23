import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import bannerImage from '../../assets/banner-home.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
            <header className="home-header">
                <div className="home-banner-container">
                    <Banner
                        title="Chez vous, partout et ailleurs"
                        image={bannerImage}
                    />
                </div>
            </header>
            <main className="home-main">
                <Gallery />
            </main>
        </>
    )
}

export default Home
