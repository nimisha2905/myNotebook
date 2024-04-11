import React, { Component } from 'react'
import NavBar from '../NavBar'
import NotesList from '../NotesList'
import './index.css'
import { v4 as uuidv4 } from 'uuid'
import { BsSearch } from "react-icons/bs";

class NotesHomePage extends Component {
    state = {
        inputTitle: "",
        inputDescription: "",
        inputImageLink: "",
        noteList: [],
        searchInput: ""
    }
    onChangeTitle = (event) => {
        this.setState({ inputTitle: event.target.value })
    }

    onChangeDescription = (event) => {
        this.setState({ inputDescription: event.target.value })
    }
    onChangeImageLink = (event) => {
        this.setState({ inputImageLink: event.target.value })
    }
    onChangeSearchInput = (event) => {
        this.setState({ searchInput: event.target.value })
    }
    onSubmitForm = (event) => {
        event.preventDefault()
        const { inputTitle, inputDescription, inputImageLink } = this.state
        if(inputTitle===""){
            alert("Please Enter Title")
        }else if(inputDescription===""){
            alert("Please fill description area")
        }else{
            const newNoteList = {
                id: uuidv4(),
                title: inputTitle,
                description: inputDescription,
                imageUrl: inputImageLink,
                date: new Date()
            }
            this.setState((prevState) => ({
                noteList: [...prevState.noteList, newNoteList],
                inputTitle: "",
                inputDescription: "",
                inputImageLink: ""
            }))
        }

    }
    onDeleteNote = (id) => {
        const { noteList } = this.state
        const filteredNoteList = noteList.filter(each => (each.id !== id))
        this.setState({ noteList: filteredNoteList })
    }
    render() {
        const { inputTitle, inputDescription, noteList, inputImageLink, searchInput } = this.state
        const filteredSearchNotes = noteList.filter(each => each.title.toLowerCase().includes(searchInput.toLowerCase()))
        return (
            <div className='app-container'>
                <NavBar />
                <div className='add-note-container'>
                    <h1 className='heading'>Add a Note</h1>
                    <form className='form-container' onSubmit={this.onSubmitForm}>
                        <div className='input-container'>
                            <label htmlFor="title" className='label'>Title</label>
                            <input type="text" placeholder='Enter title' className='title-input' id="title" onChange={this.onChangeTitle} value={inputTitle} />
                        </div>
                        <div className='input-container'>
                            <label htmlFor="description" className='label'>Description</label>
                            <textarea col="65" rows="7" placeholder='Enter description' id="description" onChange={this.onChangeDescription} className='description-input' value={inputDescription}></textarea>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="image-link" className='label'>Image/Video Link</label>
                            <input type="url" placeholder='Enter image/Video Link' id="image-link" onChange={this.onChangeImageLink} className='title-input' value={inputImageLink} />
                        </div>
                        <div className='btn'>
                            <button type="submit" className='add-btn'>Add</button>
                        </div>
                    </form>
                    <hr className='sep-line' />
                    <div className='your-notes-container'>
                        <div className='your-notes-header'>
                            <h1 className='your-notes-heading'>Your Notes</h1>
                            <div className='search-flex'>
                                <BsSearch size={20} className='search-icon' />
                                <div>
                                    <input type="search" placeholder='Search' class="search-input-class" value={searchInput} onChange={this.onChangeSearchInput} />
                                </div>
                            </div>

                        </div>


                        <ul className='notes-list-cont'>
                            {filteredSearchNotes.map(eachNote => (<NotesList noteDetails={eachNote} key={eachNote.id} onDeleteNote={this.onDeleteNote} />))}
                        </ul>

                    </div>
                </div>


            </div>
        )
    }
}

export default NotesHomePage
