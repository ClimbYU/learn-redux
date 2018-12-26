import React from 'react'
// import { connect } from '../mini-redux/mini-redux-react'
import { connect } from 'react-redux'
import {
    borrowFromLibMary,
    borrowFromBob,
    revertToLib,
    changeColor,
    login
} from '../redux/actions'

class Mary extends React.Component {
    render() {
        const content =
            this.props.user.users['Bob'] ? (
                <div>
                    <button onClick={this.props.borrowFromLibMary}>去图书馆借一本书</button>
                </div>
            ) : (
                    <div>
                        <button onClick={() => this.props.login('Mary')}>申请借书权限</button>
                    </div>
                )
        return (
            <div style={{ backgroundColor: this.props.own.color }}>
                <h2>Mary有{this.props.own.numMary}本书</h2>
                <button onClick={this.props.borrowFromBob}>向Bob借一本书</button>
                {content}
                <button onClick={this.props.changeColor}>改变颜色</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    borrowFromLibMary,
    borrowFromBob,
    revertToLib,
    changeColor,
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Mary)