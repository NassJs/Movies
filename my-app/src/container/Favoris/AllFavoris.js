import React, { useState, useEffect } from 'react'
import { Picture } from '@/component/Picture/Picture'
import { AiOutlineStar } from "react-icons/ai"
import { Note } from '@/component/Note/Note'
import { Card, CardBody, CardHeader } from '@/component/Card/Card'

export const AllFavoris = () => {

    const [getFavoris, setGetFavoris] = useState([])
    const getAllFavoris = (key) => {
        let getKey = localStorage.getItem(key)
        let parse = JSON.parse(getKey)
        setGetFavoris(parse)
    }

    useEffect(() => {
        getAllFavoris("favoris")
    }, [])

    if (getFavoris)
        return (
            <div>
                <h1> All Favoris </h1>
                <div className="flex justify-center flex-wrap">
                    {getFavoris.map((all) => (
                        <Card>
                            <CardHeader>
                                <Picture size="h-64 w-64" src={`https://image.tmdb.org/t/p/original//${all.movie.backdrop_path}`} />
                            </CardHeader>
                            <CardBody>
                                <p className='flex justify-center p-4 text-xs truncate'> {all.movie.title.substr(0, 15)}</p>
                            </CardBody>
                            <Note variant="flex items-center">  {all.movie.vote_average} <AiOutlineStar /> </Note>
                        </Card>
                    ))}
                </div>

            </div >
        )
    return <div> "Aucun Film & Série en favoris pour le moment"</div>
}
