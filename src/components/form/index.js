import React from 'react'
import './style.scss'

const Form = () => {
    return(
        <form action="">
            <input type="text" placeholder="Login" />
            <input type="password" placeholder="Senha"/>
            <input type="submit" id="btn" value="Entrar"/>
        </form>
    )
}
export default Form