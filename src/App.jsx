import React from "react"
import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import data from "./data.js"
import './index.css'

export default function App(){
    const cards = data.map(card => {
        return (
            <Card
            key={card.id}
            place={card.place}
            country={card.country}
            googleMapsUrl={card.googleMapsUrl}
            dateOfVisit={card.dateOfVisit}
            description={card.description}
            imageUrl={card.imageUrl}
            />
        )
    })
    return (
        <div className="app">
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}