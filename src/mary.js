import React from 'react'
import {connect} from './mini-redux-react'
import {
    borrowFromLibMary,
    borrowFromBob,
    revertToLib,
    changeColor
} from './actions'

class Mary extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color}}>
                <h2>Mary有{this.props.numMary}本书</h2>
                <button onClick={this.props.borrowFromLibMary}>去图书馆借一本书</button>
                <button onClick={this.props.borrowFromBob}>向Bob借一本书</button>
                <button onClick={this.props.changeColor}>改变颜色</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    numMary:state.numMary,
    color:state.color
})

const mapDispatchToProps = {
    borrowFromLibMary,
    borrowFromBob,
    revertToLib,
    changeColor
}

export default connect(mapStateToProps,mapDispatchToProps)(Mary)