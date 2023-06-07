import React from "react"

export default function Card({place, country, googleMapsUrl, dateOfVisit, description, imageUrl}){
    return (
        <div>
        <div className="card">
            <div className="place-img">
                <img  src={imageUrl} />
            </div>
            <div className="card-info">
                <div className="location">
                    <img src="./public/images/location-pin.png" />
                    <h4>{country}</h4>
                    <div className="google-map-link">
                        <a href={googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>
                <h1>{place}</h1>
                <h3>{dateOfVisit}</h3>
                <p>{description}</p>
            </div>
        </div>
        <hr />
        </div>
    )
}
