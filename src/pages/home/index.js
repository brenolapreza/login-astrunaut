import React from 'react'
import Nav from '../../components/nav'
import Forms from '../../components/forms'
import '../../assets/global.scss'
import './style.scss'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <div className="nav">
                    <Nav />
                </div>
                <div className="wrapper">
                    <div className="primary">
                        <h1>CREATE  ACCOUNT</h1>
                        <Forms />
                    </div>
                    <div className="secundary"></div>
                </div>
            </>
        )
    }
}