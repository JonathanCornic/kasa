import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Data from '../../datas/about.json'
import bannerImage from '../../assets/banner-about.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <header className="about-header">
                <div className="about-banner-container">
                    <Banner image={bannerImage} />
                </div>
            </header>
            <main className="about-main">
                <div className="collapse-container-about">
                    {Data.map((item) => (
                        <Collapse
                            key={item.id}
                            title={item.title}
                            content={item.description}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}
export default About
