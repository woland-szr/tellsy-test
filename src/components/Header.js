import React from 'react'

export const Header = () => {
    return (
        <header>
        <div className='row' style={{marginTop: '20px', marginBottom:'20px'}}>
            <div className='col'></div>
            <div className='col'></div>
            <nav className='col-6 text-center' style={{padding: '0'}}>
                <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', paddingLeft: '0', paddingBottom: '0', margin: '0'}}>
                    <li>О платформе</li>
                    <li>Загрузка пользователей</li>
                    <li style={{paddingBottom: '20px', borderBottom: '1px solid #007bff'}}>
                        <a href='/'>Список пользователей&nbsp;&#9013;</a>
                    </li>
                </ul>
            </nav>
            <div className='col text-left'></div>
        <div className='col text-right'>
            <strong>Техподдержка</strong>
        </div>
        </div>
        </header>
    )
}