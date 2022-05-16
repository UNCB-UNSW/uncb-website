import LandingPage from './LandingPage'
import About from './About'
import RecentEvents from './RecentEvents'
import RecentArticles from './RecentArticles'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <>
            <LandingPage/>
            <About/>
            <RecentEvents/>
            <RecentArticles/>
            <Footer/>
        </>
    )
}

export default Home