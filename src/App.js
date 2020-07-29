import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather.js'

const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data)
            setQuery('')
        }
    }
    return (
        <div className="container">
            <input type="text"
                className="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    )
}

export default App