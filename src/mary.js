import React from 'react'
import {connect} from './mini-redux-react'

class Mary extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color}}>
                <h2>Mary有{this.props.num}本书</h2>
                <button onClick={this.props.borrowFromLib}>去图书馆借一本书</button>
                <button onClick={this.props.borrowFromMary}>向Mary借一本书</button>
                <button onClick={this.props.revertToLib}>归还图书馆</button>
                <button onClick={this.props.revertToLibAsync}>归还图书馆</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    total:state.total,
    color:state.color
})

const mapDispatchToProps = {
    borrowFromLib,
    borrowFromMary,
    revertToLib,
    revertToLibAsync
}

export default connect(mapStateToProps,mapDispatchToProps)(Mary)