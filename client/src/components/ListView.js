import React, {useEffect, useState} from 'react'
import {getPostings} from '../actions/main.actions'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/ListView.css'

export default props => {
    const [view, setView] = useState('list')
    const postings = useSelector(appState => appState.postings)

    useEffect(() => {
        getPostings(props.match.params.category, props.match.params.subcategory)
    }, [])
    console.log(view)
    function changeView(e) {
        setView(e.target.value)
    }

    return (
        <div id="listWrapper">
            <div id="topBar">
                <div id="navigation">
                <Link to={"/"}>RyansList > {props.match.params.category} > {props.match.params.subcategory}</Link>
                </div>
                <div id="profile">
                    <li>My Profile</li>
                    <li>Create a new Post</li>
                </div>
            </div>
            <div id="searchList">
                <input type="text" id="searchInputList" placeholder={`Search ${props.match.params.subcategory}`}></input>
            </div>
            <div id="searchOptions">
                <button onClick={changeView} value="thumbnail" className={view === "thumbnail" ? "thumbnail active" : "thumbnail"}>Thumbnail View</button>
                <button onClick={changeView} value="gallery" className={view === "gallery" ? "gallery active" : "gallery"}>Gallery View</button>
                <button onClick={changeView} value="list" className={view === "list" ? "list active" : "list"}>List View</button>
            </div>
            <div className={'post-' + view}>
            {postings.map(item => {
                if (view === "list") {
                    return (
                        <div className="post">
                    <Link to={`/view/${props.match.params.category}/${props.match.params.subcategory}/${item.id}`}><p>&#9734; Aug 9 {item.title} ${item.price} ({item.city})</p></Link>
                    </div>
                    )
                } else if(view === "thumbnail") {
                    return (<h1>Thumbnail</h1>)
                } else if(view === "gallery") {
                    return (                        <div className="galleryPost">
                    <img className="itemImage" src={item.image}></img>
                <Link to={`/view/${props.match.params.category}/${props.match.params.subcategory}/${item.id}`}><p>&#9734; Aug 9 {item.title} ${item.price} ({item.city})</p></Link>
                </div>)
                }
            })}
            </div>
        </div>
    )
}