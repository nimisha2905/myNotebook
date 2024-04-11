import React from 'react'
import './index.css'
import { formatDistanceToNow } from 'date-fns'

const NotesList = (props) => {
    const { noteDetails,onDeleteNote } = props
    const { id,title, description,date,imageUrl } = noteDetails
    const postedTime = formatDistanceToNow(date)
    const onDeleteButton=()=>{
        onDeleteNote(id)
    }
    return (
        <>
            <li className='note-card'>
                <div className='title-cont'>
                    <h3 className='card-title-heading'>Title: {title}</h3>
                    <p className='time'>{postedTime} ago</p>
                </div>
                <p className='card-title-description'>Description: {description}</p>
                <a href={imageUrl} className='card-image-url' target="_blank">{imageUrl}</a>
                <br/>
                <button type="button" className='delete-btn' onClick={onDeleteButton}>Delete</button>
            </li>

        </>
    )
}

export default NotesList
