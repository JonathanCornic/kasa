import Banner from '../../components/headerComponents/Banner'
import CardContainer from '../../components/mainComponents/CardContainer'
import bannerImage from '../../assets/banner-home.jpg'

const Home = () => {
    return (
        <>
            <Banner
                title="Chez vous, partout et ailleurs"
                image={bannerImage}
            />
            <CardContainer />
        </>
    )
}

export default Home
