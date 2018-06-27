import React, {Component} from "react"
import {
    View,
    Button,
    Text
} from "react-native"

import {connect} from 'react-redux'; // 引入connect函数
import {performLoginAction} from "./action/LoginAction"


class root extends Component {
    render() {
        //拿到mapDispatchProps里面的login函数
        const {login} = this.props;
        return (
            <View>
                <Text>content</Text>
                {/*执行mapDispatchProps的login函数*/}
                <Button onPress={() => login()} title="登录"/>

                <Text>result:{this.props.result}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    //将reducer返回的状态复制给store，然后页面就可以通过this.props从store中拿到这个值
    loading: state.loginIn.loading,
    result: state.loginIn.result,
});


const mapDispatchProps = (dispatch) => ({
    //这个login，页面可以通过props拿到
    login: () => dispatch(performLoginAction("zhangsan", "123456")),
});


export default connect(mapStateToProps, mapDispatchProps)(root)

