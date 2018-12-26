import React from 'react'
import PropTypes from 'prop-types'
import { createActions } from './mini-redux'

/**
 * connect为高阶组件将组件获取context，转化state及action
 * @param {获取状态} mapStateToProps 
 * @param {action转化} mapDispatchToProps 
 */
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnectComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props, context) {
            super(props, context)
            this.state = {
                props: {}
            }
        }
        // 必须在 componentWillMount 生命周期执行，否则会报错因为被修饰的组件的的render过程会先于componentDidMount执行导致报错
        componentWillMount() {
            const { store } = this.context
            // 设置监听
            store.subscribe(() => this.update())
            this.update()
        }
        // componentDidMount() {
        //     const { store } = this.context
        //     // 设置监听
        //     store.subscribe(() => this.update())
        //     this.update()
        // }
        // dispatch后会触发update引发组件更新
        update() {
            const { store } = this.context
            const storeProps = mapStateToProps(store.getState())
            const dispatchActions = createActions(store.dispatch, mapDispatchToProps)
            this.setState({
                props: {
                    ...this.state.props,
                    ...storeProps,
                    ...dispatchActions
                }
            })

        }

        render() {
            return <WrapComponent {...this.state.props} />
        }
    }
}
/**
 * 
 * 提供全局的store
 * 
 */
class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }
    constructor(props, context) {
        super(props, context)
        this.state = {
            store: props.store
        }
    }
    getChildContext() {
        return { store: this.state.store }
    }
    render() {
        return this.props.children
    }
}


export default Provider