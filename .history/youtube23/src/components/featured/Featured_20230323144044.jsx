import React from 'react'
import "./Features.scss"
const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>Find the perfect freelance services for your business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src='' alt='' />
                            <input type="text" placeholder='Try "building mobil app"'/>
                        </div>
                        <button></button>
                    </div>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}

export default Featured