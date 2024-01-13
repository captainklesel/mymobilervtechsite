import Header from './header'
import Footer from './footer'
import Card from './card'
import Banner from './banner'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>
    )
}