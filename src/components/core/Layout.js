import Navigation from "./Navigation"
import { PageHeader } from 'antd'

function Layout({ children, title, subTitle }) {
    return (
        <div>
            <Navigation />
            <PageHeader className="jumbotron" title={title} subTitle={subTitle} />

            <div style={{ width: "85%", margin: "0 auto" }}>{children}</div>
        </div>
    )
}

export default Layout