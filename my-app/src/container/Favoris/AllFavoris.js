import React, { useState, useEffect } from 'react'
import { Picture } from '@/component/Picture/Picture'
import { AiOutlineStar } from "react-icons/ai"
import { Note } from '@/component/Note/Note'
import { Card, CardBody, CardFooter, CardHeader } from '@/component/Card/Card'

export const AllFavoris = () => {

    const [getFavoris, setGetFavoris] = useState([])

    const getAllFavoris = (key) => {
        let getKey = localStorage.getItem(key)
        let parse = JSON.parse(getKey)
        setGetFavoris(parse)
    }

    const handleDelete = () => {
        console.log("test")
    }


    useEffect(() => {
        getAllFavoris("favoris")
    }, [])

    if (getFavoris)
        return (
            <div>
                <h1> All Favoris </h1>

                {getFavoris.map((all) => (
                    <Card>
                        <CardHeader>
                            <Picture src={`http://image.tmdb.org/t/p/w300${all.movie.backdrop_path}`} />
                        </CardHeader>
                        <CardBody>
                            <p className='flex justify-center p-4 text-xs truncate'> {all.movie.title}</p>
                        </CardBody>
                        <Note>  {all.movie.vote_average} <AiOutlineStar /> </Note>
                    </Card>
                ))}

            </div >
        )
    return <div> "Aucun Film & Série en favoris pour le moment"</div>
}