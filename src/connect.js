import React from 'react'

const connect = (App) => {
    return class Connect extends React.Component {
        componentDidMount(){
            console.log('Connect componentDidMount')
        }
        componentWillMount(){
            console.log('Connect componentWillMount')
        }
        render() {
            return <App/>
        }
    }
}

export default connect