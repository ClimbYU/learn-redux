import React from 'react'
import {connect} from './mini-redux-react'

class Library extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color}}>
                图书馆有{this.props.total}本书
            </div>
        )
    }
}

const mapStateToProps = state => ({
    total:state.total,
    color:state.color
})


export default connect(mapStateToProps)(Library)