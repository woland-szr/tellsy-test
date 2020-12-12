import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, hideForm } from './redux/actions'

export const Form = () => {
    const initialData = {
        id: 0,
        date: '',
        fullName: '',
        position: '',
        email: '',
        password: '',
        phone: ''
    }
    const [formData, setFormData] = useState(initialData)

    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const formHandler = e => {
        e.preventDefault()
        let empty = 0
        Object.keys(formData).forEach(key => formData[key] === '' &&  empty++) 
        if (empty > 0) {
            alert('Заполните все поля')
        } else {
            dispatch(addUser(formData))
            dispatch(hideForm())
        } 
    }

    return (
        <div 
            className="modal fade show" 
            tabIndex="-1" 
            style={{display: "block", background: 'rgba(0,0,0,.7)', zIndex: '100'}}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
            <form onSubmit={formHandler}>
            <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLongTitle">Добавление данных о экспертах по оценке и руководителей</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{dispatch(hideForm())}}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body" style={{margin: 'auto 150px'}}>
                <div className="form-group">
                    <label htmlFor="inputDate">Дата регистрации</label>
                    <input 
                        type="date" 
                        id="inputDate" 
                        name="date" 
                        className="form-control" 
                        placeholder="Выберите дату" 
                        onChange={inputHandler}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="inputFullName">ФИО</label>
                    <input 
                        type="text" 
                        id="inputFullName" 
                        name="fullName" 
                        className="form-control" 
                        placeholder="Введите ФИО полностью" 
                        onChange={inputHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPosition">Должность</label>
                    <select 
                        id="selectPosition"
                        name="position"
                        className="form-control" 
                        onChange={inputHandler}>
                            <option value='' hidden >Выберите должность</option>
                            <option value='Внешний экпсерт'>Внешний экпсерт</option>
                            <option value='HR BP'>HR BP</option>
                            <option value='Руководитель отдела'>Руководитель отдела</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Почта (логин)</label>
                    <input 
                        type="email" 
                        id="inputEmail"
                        name="email"
                        className="form-control"  
                        placeholder="Введите адрес" 
                        onChange={inputHandler}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Пароль</label>
                    <input 
                        type="text" 
                        id="inputPassword" 
                        name="password" 
                        className="form-control" 
                        placeholder="Введите пароль" 
                        onChange={inputHandler}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPhone">Телефон, привязанный к мессенджеру</label>
                    <input 
                        type="text" 
                        id="inputPhone" 
                        name="phone"
                        className="form-control" 
                        placeholder="+79xxxxxxxxx" 
                        onChange={inputHandler}
                        pattern="\+79[0-9]{9}"
                        />
                </div>
            </div>
            <div className="text-center" style={{marginBottom: '20px'}}>
                <button type="submit" className="btn btn-primary">Сохранить</button>
            </div>
            </form>
            </div>
        </div>
        </div>
    )
}