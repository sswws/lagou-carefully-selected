import { createAction } from "redux-actions"

// 发起注册请求的
export const signup = createAction("signup")
// 注册成功
export const signup_success = createAction("signup_success")
// 注册失败
export const signup_fail = createAction("signup_fail")
//重置注册状态
export const signup_reset = createAction("signup_reset")