import React from 'react'
// import { connect } from '../mini-redux/mini-redux-react'
// import { connect } from 'react-redux'
import Hoc from './connect'

class Test extends React.Component {
    componentDidMount(){
        console.log('Test componentDidMount')
    }
    componentWillMount(){
        console.log('Test componentWillMount')
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}
export default Hoc(Test)