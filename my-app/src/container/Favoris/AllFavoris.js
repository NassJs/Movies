import React, { useState, useEffect } from 'react'

export const AllFavoris = () => {

    const [getFavoris, setGetFavoris] = useState([])
    console.log("all", getFavoris)
    const getAllFavoris = (key) => {
        let getKey = localStorage.getItem(key)
        let parse = JSON.parse(getKey)
        setGetFavoris(parse)
    }
    const test = getFavoris.map((tes) => tes.movie);
    console.log("test", test)

    useEffect(() => {
        getAllFavoris("favoris")
    }, [])

    if (getFavoris)
        return (
            <div>
                <h1> All Favoris</h1>
                <div>
                    {getFavoris.map((all) => (
                        <div key={all.movie.id}> {all.movie.id} </div>

                    ))}
                </div>
            </div>
        )
    return "Aucun Film & Série en favoris pour le moment"
}
