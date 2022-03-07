import { Menu } from "antd"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navigation() {
    const router = useSelector(state => state.router)
    return (
        <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
            <Menu.Item key="/">
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/shop">
                <Link to="/shop">商城</Link>
            </Menu.Item>
            <Menu.Item key="/signin">
                <Link to="/signin">登陆</Link>
            </Menu.Item>
            <Menu.Item key="/signup">
                <Link to="/signup">注册</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navigation