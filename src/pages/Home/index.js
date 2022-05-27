import LandingPage from './components/LandingPage'
import About from './components/About'
import RecentEvents from './components/RecentEvents'
import RecentArticles from './components/RecentArticles'
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