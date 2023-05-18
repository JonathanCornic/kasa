import Banner from '../../components/Banner'
import bannerImage from '../../assets/banner-about.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <header className="banner-header">
                <Banner image={bannerImage} />
            </header>
        </>
    )
}
export default About
