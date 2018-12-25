import React from 'react'
import {connect} from './mini-redux-react'
import {
    borrowFromLibBob,
    borrowFromMary,
    revertToLib,
    revertToLibAsync
} from './actions'


class Bob extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color,border:'green'}}>
                <h2>Bob有{this.props.numBob}本书</h2>
                <button onClick={this.props.borrowFromLibBob}>去图书馆借一本书</button>
                <button onClick={this.props.borrowFromMary}>向Mary借一本书</button>
                <button onClick={this.props.revertToLib}>归还图书馆</button>
                <button onClick={this.props.revertToLibAsync}>过两天归还图书馆</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    numBob:state.numBob,
    color:state.color
})

const mapDispatchToProps = {
    borrowFromLibBob,
    borrowFromMary,
    revertToLib,
    revertToLibAsync
}

export default connect(mapStateToProps,mapDispatchToProps)(Bob)