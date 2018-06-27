import * as types from "../action/LoginActionType"

const initialState = {
    loading: false,
    result: "请登录"
};

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                result: "正在登陆",
                loading: true,
            };
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                result: "登陆成功",
                loading: false,
            };
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                result: "登陆失败",
                loading: false,
            };
            break;
        default:
            return state
    }

}