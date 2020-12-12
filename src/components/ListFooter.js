import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { currentPage, filterOff, showForm } from './redux/actions'

export const ListFooter = () => {

    const dispatch = useDispatch()

    const filter = useSelector(state => state.filter)
    
    const users = useSelector(state => {
        if (filter) {
            return state.filteredUsers
        } else { 
            return state.users
        }
    })

    const curPage = useSelector(state => state.currentPage)

    const usersPerPage = 3

    const pages = Math.ceil(users.length/usersPerPage)

    const linkBtnStyle = {
        backgroundColor: '#ffffff',
        border: '0',
        color: '#2c5ddf',
        cursor: 'pointer'
      }

    const pagersList = p => {
        let content = []
        if (pages > 1) {
            if (curPage === 1) {
                content.push(<span key='prev' style={{marginLeft: '5px', marginRight: '5px'}}>&lt;</span>)
            } else {
                content.push(<button key='prev' style={linkBtnStyle} onClick={() => dispatch(currentPage(curPage-1))}>&lt;</button>)
            }
            for (let i = 1; i <= p; i++) {
                if (i === curPage) {
                    content.push(<span key={i} style={{marginLeft: '5px', marginRight: '5px'}}>{i}</span>)    
                } else {
                    content.push(<button key={i} style={linkBtnStyle} onClick={() => dispatch(currentPage(i))}>{i}</button>)
                }
            }
            if (curPage === pages) {
                content.push(<span key='next' style={{marginLeft: '5px', marginRight: '5px'}}>&gt;</span>)
            } else {
                content.push(<button key='next' style={linkBtnStyle} onClick={() => dispatch(currentPage(curPage+1))}>&gt;</button>)
            }
        }
        return content;
    }

    const btnHandler = () => {
        dispatch(filterOff())
        dispatch(showForm())
    }


    return (
        <div className='row align-items-center'>
            <div className='col'></div>
            <div className='col text-center'>
                {pagersList(pages)}
            </div>
        <div className='col text-right'>
            <button type="button" className="btn btn-primary" onClick={()=>btnHandler()}>Добавить пользователя</button>            
        </div>
        </div>
    )
}