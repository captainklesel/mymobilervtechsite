import Layout from './components/layout'

export async function getStaticProps() {
    return {
        props: {
            title: 'Home Page'
        }
    }
}

export default function Page({ props }) {
    return (
        <Layout />
    )
}