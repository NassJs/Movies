import React, { useState, useEffect } from 'react'
import { Picture } from '@/component/Picture/Picture'
import { Card, CardBody, CardHeader } from '@/component/Card/Card'
import { SubTitle } from '@/component/Title/Title';
import { useMovieFavoris } from '@/context/LocalStorageProvider';
import { Button } from '@/component/Button/Button';
export const AllFavoris = () => {

    const [getFavoris, setGetFavoris] = useState([])

    const getAllFavoris = (key) => {
        let getKey = localStorage.getItem(key)
        let parse = JSON.parse(getKey)
        setGetFavoris(parse)
    }

    const handleDelete = ({ id }) => {
        console.log("id", id)
        const deleteMovie = getFavoris.filter((item) => item.id !== id)
        setGetFavoris(deleteMovie)
    }

    useEffect(() => {
        getAllFavoris("favoris")
    }, [])

    if (getFavoris.length > 0)
        return (
            <div>
                <h1> All Favoris </h1>
                <div className="flex justify-center flex-wrap">
                    {getFavoris.map((all) => (
                        <Card key={all.id} className="max-w-sm rounded  bg-slate-200 shadow-xl m-4">
                            <CardHeader>
                                <Picture size="h-64 w-64" src={`https://image.tmdb.org/t/p/original//${all.backdrop_path}`} />
                            </CardHeader>
                            <CardBody>
                                <SubTitle variant="flex justify-center"> {all.original_title.substr(0, 15)}</SubTitle>
                                <Button onClick={() => handleDelete(all)}> Delete </Button>
                            </CardBody>
                        </Card>
                    ))}
                </div>

            </div >
        )
    return <div> "Aucun Film & Série en favoris pour le moment"</div>
}
