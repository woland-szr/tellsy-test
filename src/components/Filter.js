import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterOn, filterOff } from './redux/actions'

export const Filter = () => {

    const initFilter = {
        id: '',
        fullName: '',
        position: '',
        email: ''
    }
    const [filterData, setFilterData] = useState(initFilter)


    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    let filteredUsers = [...users]
    const selectHandler = e => {
        setFilterData({...filterData, [e.target.name]: e.target.value})
    }

    const formHandler = e => {
        e.preventDefault()
        for (let key in filterData) {
            if (filterData[key]) {
                filteredUsers = filteredUsers.filter(user => String(user[key]) === filterData[key]) 
            }
        }
        setFilterData(initFilter)
        dispatch(filterOn(filteredUsers))
    }

    const clearFilter = () => {
        setFilterData(initFilter)
        dispatch(filterOff())
    }

    return (
        <div className="filter text-center">
            <h3 className="text-center">Список экспертов по оценке и руководителей</h3>
            <form onSubmit={formHandler}>
            <div className="form-row align-items-center justify-content-between" style={{marginTop: '50px', marginBottom: '100px'}}>
                <div className="col-auto">
                    <select 
                        id="selectId"
                        key="id"
                        name="id"
                        className="form-control"
                        value={filterData.id} 
                        onChange={selectHandler}>
                            <option key='0' value='' hidden >Выберите ID</option>
                            {users.map(item => item.id).map((i, n) => {
                                return (
                                    <option key={n} value={i}>{i}</option>
                                )    
                            })}
                    </select>
                </div>
                <div className="col-auto">
                    <select 
                        id="selectFullName"
                        name="fullName"
                        key="fullName"
                        className="form-control" 
                        value={filterData.fullName} 
                        onChange={selectHandler}>
                            <option key='0' value='' hidden >Выберите ФИО</option>
                            {users.map(item => item.fullName).map((i, n) => {
                                return (
                                    <option key={n} value={i}>{i}</option>
                                )    
                            })}
                    </select>
                </div>
                <div className="col-auto">
                    <select 
                        id="selectPosition"
                        name="position"
                        key="position"
                        className="form-control" 
                        value={filterData.position}
                        onChange={selectHandler}>
                            <option key='0' value='' hidden >Выберите должность</option>
                            {
                            [...new Set(users.map(item => item.position).map(i => i))].map((i, n) => {
                                return (
                                    <option key={n} value={i}>{i}</option>
                                )    
                            })}
                    </select>
                </div>
                <div className="col-auto">
                    <select 
                        id="selectEmail"
                        name="email"
                        key="email"
                        className="form-control" 
                        value={filterData.email} 
                        onChange={selectHandler}>
                            <option key='0' value='' hidden >Выберите email</option>
                            {users.map(item => item.email).map((i, n) => {
                                return (
                                    <option key={n} value={i}>{i}</option>
                                )    
                            })}
                    </select>
                </div>
                <div className="col-auto"><button type="submit" className="btn btn-primary">Применить фильтры</button></div>
                <div className="col-auto"><button type="button" className="btn btn-primary" onClick={()=>clearFilter()}>Сбросить фильтры</button></div>
            </div>
            </form>
        </div>
    )
}