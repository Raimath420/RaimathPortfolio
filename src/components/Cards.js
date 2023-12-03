import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div className="box flex">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div className="box-img flex">
                        <img src={props.image} alt="" />
                    </div>
                    <h2 className="overlay flex">{props.text}</h2>
                </a>
            </div>
        </>
    )
}

export default Cards
