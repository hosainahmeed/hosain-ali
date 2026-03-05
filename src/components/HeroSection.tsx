import Avatar from "./hero-cards/Avatar"
import ClickToAction from "./hero-cards/ClickToAction"
import Description from "./hero-cards/Description"
import MainInfoCard from "./hero-cards/MainInfoCard"
import Skills from "./hero-cards/Skills"
import Social from "./hero-cards/Social"
import Stats from "./hero-cards/Stats"


function HeroSection() {
    return (
        <div className="bento-grid">
            <MainInfoCard />
            <Avatar />
            <Description />
            <Stats />
            <Skills />
            <Social />
            <ClickToAction />
        </div>
    )
}

export default HeroSection