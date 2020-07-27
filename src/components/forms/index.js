import React from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.scss';

const Forms = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                console.log(data)
                if (data) {
                    localStorage.setItem('app-token', data.result)
                    history.push('/logado');
                }
            })
    }
    const validations = yup.object().shape({
        email: yup.string().email('Email Invalido!!').required('Required Email'),
        password: yup.string().min(8, 'Senha Invalida').required('Required Password')
    })
    return (
        <>
            <Formik initialValues={{
                email: '',
                password: '',
            }} onSubmit={handleSubmit} validationSchema={validations} >
                <Form>
                    <Field name="email" />
                    <ErrorMessage component="span" name="email" />
                    <Field name="password" />
                    <ErrorMessage component="span" name="password" />
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}
export default Forms