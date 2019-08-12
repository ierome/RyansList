import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import '../styles/main.css'
import Calendar from 'react-calendar'
import styled from 'styled-components'
import { getCategories, getSubCategories } from '../actions/main.actions'
import { Link } from 'react-router-dom'

export default props => {
const categories = useSelector(appstate => appstate.categories)
const community = useSelector(appState => appState.community)
const housing = useSelector(appState => appState.housing)
const job = useSelector(appState => appState.job)
const services = useSelector(appState => appState.services)
const forSale = useSelector(appState => appState.forSale)
const personals = useSelector(appState => appState.personals)
const gigs = useSelector(appState => appState.gigs)
useEffect(() => {
getCategories()
getSubCategories()
}, [])

function subClick(e) {
console.log(e.target.value)
}

const Calendare = styled(Calendar)`
    height: 220px;`;


    return (
        <div id="mainWrapper">
            <div id="leftSideBar">
                <h1>Ryanslist</h1>
                <Link to="/post"><li>Create a posting</li></Link>
                <li>My Account</li>
                <input id="search" type="text" placeholder="Search Ryanslist"></input>
                <div id="calendar">
                    <Calendare />
                </div>
                <div className="linksDiv">
                <li>help, faq, abuse, legal</li>
                <li>avoid scams & fraud</li>
                <li>personal safety tips</li>
                <li>terms of usenew</li>
                <li>privacy policy</li>
                <li>system status</li>
                </div>
                <div className="linksDiv">
                <li>about craigslist</li>
                <li>craigslist is hiring in sf</li>
                <li>craigslist open source</li>
                <li>craigslist blog</li>
                <li>best-of-craigslist</li>
                <li>craigslist TV</li>
                <li>"craigslist joe"</li>
                <li>craig connects</li>
                </div>
            </div>
            <div id="mainContent">
                {categories.map(item => {
                    if (item.name === "community") {
                        return (
                            <div id="cmmty" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id={item.name}>
                                {community.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>
                                })}
                            </div>
                            </div>
                        )
                    } else if (item.name === "housing" ) {
                        return (
                            <div id="hzing" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id={item.name}>
                                {housing.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>                                })}
                            </div>
                            </div>
                        )
                    } else if (item.name === "jobs" ) {
                        return (
                            <div id="jbz" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id={item.name}>
                                {job.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>                                })}
                            </div>
                            </div>
                        )
                    } else if (item.name === "services" ) {
                        return (
                            <div id="srvs" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id={item.name}>
                                {services.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>                                })}
                            </div>
                            </div>
                        )
                    } else if (item.name === "for sale" ) {
                        return (
                            <div id="fs" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id="forSale">
                                {forSale.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>                                })}
                            </div>
                            </div>
                        )
                    } else if (item.name === "personals" ) {
                        return (
                            <div id="prsnl" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id={item.name}>
                                {personals.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>                                })}
                            </div>
                            </div>
                        )
                    } else if (item.name === "gigs" ) {
                        return (
                            <div id="gigz" key={item.name}>
                            <h1>{item.name}</h1>
                            <div key={item.id} id="gigs">
                                {gigs.map((sub,i) => {
                                    return <Link to={`/view/${item.name}/${sub.name}/`}><li onClick={subClick} value={sub.id} key={sub.id}>{sub.name}</li></Link>                                })}
                            </div>
                            </div>
                        )
                    } else {
                        return <div key="jkfdslfkj"></div>
                    }
                })}
            </div>
            <div id="rightSideBar">

            </div>
        </div>
    )
}