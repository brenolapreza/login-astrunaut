import React from 'react'
import Nav from '../../components/nav'
import Form from '../../components/form'
import '../../assets/global.scss'
import './style.scss'

export default class Home extends React.Component{
    render(){
        return(
            <>
                <div className="nav">
                    <Nav/>
                </div>
                <div className="wrapper">
                    <div className="primary"><Form/></div>
                    <div className="secundary"></div>
                </div>
            </>
        )
    }
}