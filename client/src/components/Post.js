import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/post.css'
import {getSub, getSubCategories, sendPost} from '../actions/main.actions.js'

export default props => {
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [price, setPrice] = useState('')
    const [content, setContent] = useState('')
    const [thanks, setThanks] = useState('hide')

    const subcategories = useSelector(appState => appState.subs)

    useEffect(() => {
        getSub()
    }, [])

    function addPost(e) {
        e.preventDefault()
        sendPost(category, title, city, price, content)
        setThanks('')
        setCategory('')
        setTitle('')
        setCity('')
        setPrice('')
        setContent('')
    }

    return (
        <div id="makePostWrapper">
            <div id="postHeader">
                <div id="postNavigation">
                <Link to={"/"}>Back to RyansList</Link>
                </div>
                <div id="postProfile">
                    <li>My Profile</li>
                    <li>Create a new Post</li>
                </div>
            </div>
            <h1 className={thanks}>Thank you! Your post has been added!</h1>
            <form id="postForm" onSubmit={addPost}>
                <div id="categorySelect">
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Choose category to post in</option>
                    {subcategories.map(item => {
                        return <option>{item.name}</option>
                    })}
                </select>
                </div>
                <div id="textInputs">
                <input type="text" placeholder="POSTING TITLE" onChange={e => setTitle(e.target.value)}></input>
                <input type="text" placeholder="CITY" onChange={e => setCity(e.target.value)}></input>
                <input type="text" placeholder="PRICE" onChange={e => setPrice(e.target.value)}></input>
                </div>
                <textarea id="postContent" onChange={e => setContent(e.target.value)}></textarea>
                <button type="submit">Add Posting</button>
            </form>

        </div>
    )
}