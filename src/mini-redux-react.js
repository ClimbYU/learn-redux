import React from 'react'
import PropTypes from 'prop-types'
import {createActions} from './mini-redux'


export const connect = ( mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnectComponent extends React.Component{
        static contextTypes = {
            store:PropTypes.object
        }

        constructor(props,context){
            super(props,context)
            this.state = {
                props:{}
            }
        }

        componentDidMount(){
            const {store} = this.context
            store.subscribe(() => this.update())
            this.update()
        }

        update(){
            const {store} = this.context
            const storeProps = mapStateToProps(store.getState())
            const dispatchActions = createActions(store.dispatch, mapDispatchToProps)
            this.setState({
                props:{
                    ...this.state.props,
                    ...storeProps,
                    ...dispatchActions
                }
            })

        }

        render(){
            return <WrapComponent {...this.state.props}/>
        }
    }
}

class Provider extends React.Component{
    static childContextTypes = {
        store:PropTypes.object
    }
    constructor(props,context){
        super(props, context)
        this.state = {
            store : props.store
        }
    }
    getChildContext(){
        return {store:this.state.store}
    }
    render(){
        return this.props.children
    }
}


export default Provider