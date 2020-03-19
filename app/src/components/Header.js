import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/characterActions'
import { Button, Spinner } from 'reactstrap'
import './Header.css'

const Header = props => {
    return (
        <div className="header">
            <h1>Breaking Bad API</h1>
            <div className="spinner">{props.isFetchingData ? <Spinner color="light"/> : <Button color="light" onClick={props.getData}>Refresh</Button>}</div>
            <div className="error">{props.error}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
        error: state.error
    }
}

export default connect(mapStateToProps, { getData })(Header);