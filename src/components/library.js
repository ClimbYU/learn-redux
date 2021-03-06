import React from 'react'
import { connect } from '../mini-redux/mini-redux-react'
// import { connect } from 'react-redux'

class Library extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.own.color }}>
                <h2>图书馆</h2>
                <div>有{this.props.own.total}本书</div>
                <div>Bob{(this.props.user.users['Bob'] && this.props.own.total > 0) ? '可以' : '不可以'}借书</div>
                <div>Mary{(this.props.user.users['Mary'] && this.props.own.total > 0) ? '可以' : '不可以'}借书</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps)(Library)