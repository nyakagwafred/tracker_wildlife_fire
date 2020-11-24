import React from 'react'

export const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
            
        </div>
    )
}

export default LocationInfoBox
