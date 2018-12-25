import React from 'react'
import {connect} from './mini-redux-react'

class Library extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color}}>
                <h2>图书馆</h2>
                <div>有{this.props.total}本书</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    total:state.total,
    color:state.color
})


export default connect(mapStateToProps)(Library)