import React, {useEffect} from 'react'
import {getPost} from '../actions/main.actions'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../styles/View.css'
import moment from 'moment'

export default props => {
    const post = useSelector(appState => appState.post)
    useEffect(() => {
        getPost(props.match.params.id)
    }, [])

    return (
        <div id="postWrapper">
                <div id="viewTopBar">
                        <div id="viewNav">
                            <Link to={'/view/' + props.match.params.category + '/' + props.match.params.subcategory}>RyansList > {props.match.params.category} > {props.match.params.subcategory}</Link>
                        </div>
                </div>
            {post.map(item => {
                return (
                <div id="post">
                        <h1>{item.title} (${item.price})</h1>
                        <p>{item.content}</p>
                        <img src="https://via.placeholder.com/300x300.png" alt=""></img>
                        <div id="post-footer">
                            <p>Post ID: {item.id}       Posted {moment(item.created_at).fromNow()}</p>
                            <li>safety tips</li>
                            <li>prohibited items</li>
                            <li>product recalls</li>
                            <li>avoiding scams</li>
                            <li>Avoid scams, deal locally. Beware wiring (e.g Western Union), cashier checks, money orders, shipping.</li>
                        </div>
                        <div id="ryanFooter">
                            RyansList - ITS FREE!
                        </div>
                    </div>
                )
            })}
        </div>
    )
}