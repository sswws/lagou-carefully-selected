import Layout from "./Layout"
import {Button, Form, Input, Result, Spin} from "antd"
import { useDispatch } from "react-redux"
import {signup, signup_reset} from "../../store/actions/signup"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function Signup() {
    const dispatch = useDispatch()
    const {loading, loaded, success, message } = useSelector(state => state.signup)
    // 表单提交
    const handleOnFinish = value => {
        dispatch(signup(value))
    }
    // 获取表单实例对象
    const [form] = Form.useForm()
    // 正在发送注册请求 显示loading
    const showLoading = () => {
        if (loading) return <Spin />
    }
    // 注册成功 清空表单
    useEffect(() => {
        if (loaded && success) form.resetFields()
    }, [loaded, success])
    // 注册成功 显示成功提示信息
    const showSuccess = () => {
        if (loaded && success) {
            return (
                <Result
                    status="success"
                    title="注册成功"
                    extra={[
                        <Button type="primary">
                            <Link to="/signin">登陆</Link>
                        </Button>
                    ]}
                />
            )
        }
    }
    // 注册失败 显示失败提示信息
    const showError = () => {
        if (loaded && success) {
            return (
                <Result
                    status="warning"
                    title="注册失败"
                    subTitle={message}
                />
            )
        }
    }
    // 离开页面 重置注册状态
    useEffect(() => {
        return () => {
            dispatch(signup_reset())
        }
    }, [])
    // 注册表单
    const signupForm = () => {
        return (
            <Form form={form} onFinish={handleOnFinish}>
                <Form.Item name="name" label="昵称">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    return (
        <Layout title="注册" subTitle="">
            {showLoading()}
            {showSuccess()}
            {showError()}
            {signupForm()}
        </Layout>
    )
}

export default Signup