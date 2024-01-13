import Layout from './components/layout'

export async function getStaaticProps() {
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