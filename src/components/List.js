import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ListFooter } from './ListFooter'
import { Filter } from './Filter'


export const List = () => {

    const filter = useSelector(state => state.filter)
    
    const allUsers = useSelector(state => {
        if (filter) {
            return state.filteredUsers
        } else { 
            return state.users
        }
    })

    const currentPage = useSelector(state => state.currentPage)

    const usersPerPage = 3

    const users = allUsers.slice((currentPage-1)*usersPerPage, ((currentPage-1)*usersPerPage+usersPerPage))
    
    const checkedFlags = users.map(i => i.id).reduce((acc, item) => {
        acc[item] = false
        return acc
    },{})

    const [checked, setChecked] = useState(checkedFlags)

    const checkHandler = e => setChecked({...checked, [e.target.name]:e.target.checked})
    
    return (
        <div className='main'>
             <Filter />
            <table className='table text-center'>
                <thead>
                    <tr>
                    <th style={{borderStyle: 'hidden'}}> </th>
                    <th>ID</th>
                    <th>Дата регистрации</th>
                    <th>ФИО</th>
                    <th>Должность</th>
                    <th>Почта (логин)</th>
                    <th>Пароль</th>
                    <th>Телефон, привязанный к мессенджеру</th>
                    </tr>
                </thead>
                <tbody>
                { users.map(user => {
                    return (
                        <tr key={user.id} 
                            style={checked[user.id] ? {background: 'lightgrey'} : {}}
                        >
                        <td style={{borderStyle: 'hidden', background: 'white'}}><input type="checkbox" value="" name={user.id} onChange={checkHandler}/></td>
                        <td>{user.id}</td>
                        <td>{user.date}</td>
                        <td>{user.fullName}</td>
                        <td>{user.position}</td>
                        <td>{user.email}</td>
                        <td>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</td>
                        <td>{user.phone}</td>
                        </tr>
                    )
                    }
                )}
                </tbody>
            </table>
            <ListFooter />
        </div>
    )
}
