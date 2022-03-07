import Layout from './Layout'
import { useSelector } from "react-redux"

function Home() {
    const state = useSelector(state => state)
    return (
        <Layout title="拉勾严选首页" subTitle="尽情享受吧">
            Home {JSON.stringify(state)}
        </Layout>
    )
}

export default Home