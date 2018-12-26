import React from 'react'
// import { connect } from '../mini-redux/mini-redux-react'
import { connect } from 'react-redux'
import {
    borrowFromLibBob,
    borrowFromMary,
    revertToLib,
    revertToLibAsync,
    login
} from '../redux/actions'


class Bob extends React.Component {
    render() {
        const content =
            this.props.user.users['Bob'] ? (
                <div>
                    <button onClick={this.props.borrowFromLibBob}>去图书馆借一本书</button>
                    <button onClick={this.props.revertToLib}>归还图书馆</button>
                    <button onClick={this.props.revertToLibAsync}>过两天归还图书馆</button>
                </div>
            ) : (
                    <div>
                        <button onClick={() => this.props.login('Bob')}>申请借书权限</button>
                    </div>
                )
        return (
            <div style={{ backgroundColor: this.props.own.color, border: 'green' }}>
                <h2>Bob有{this.props.own.numBob}本书</h2>
                <button onClick={this.props.borrowFromMary}>向Mary借一本书</button>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { ...state }
}

const mapDispatchToProps = {
    borrowFromLibBob,
    borrowFromMary,
    revertToLib,
    revertToLibAsync,
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Bob)