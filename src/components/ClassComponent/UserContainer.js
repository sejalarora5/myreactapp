import React, { Component } from 'react'
import { fetchUsersData } from '../../redux'
import { connect } from 'react-redux'
class UserContainer extends Component {
    componentDidMount(): void {
        fetchUsersData()
    }
    render() {
        return (
            <div>UserContainer</div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsersData: () => { dispatch(fetchUsersData()) }
    }
}
export default connect(mapStateToProps)(UserContainer)