import * as types from "./LoginActionType"


export function performLoginAction(username, password) {
    return (dispatch) => {
        //正在登陆中
        dispatch(doLogin());
        //加个延时来模拟一下
        setTimeout(() => {
            if (username === "zhangsan" && password === "123456") {
                //登陆成功
                dispatch(loginSuccess("success"))
            } else {
                //登陆失败
                dispatch(loginError("error"))
            }
        }, 1000)
    }
}


function doLogin() {
    return {
        type: types.LOGIN_IN_DOING,
        result: "未登录"
    }
}

function loginSuccess(result) {
    return {
        type: types.LOGIN_IN_DONE,
        result: result
    }
}

function loginError(result) {
    return {
        types: types.LOGIN_IN_ERROR,
        result: result
    }
}
