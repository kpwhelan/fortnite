import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import BlockSpinner from "./Spinners/BlockSpinner";

export default function NewsCarousel() {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        axios.get('https://fortniteapi.io/v1/news?lang=en&type=br', {
            headers: {
                'Authorization': '55d3afac-17703e01-c084dfc7-7af2f209'
              }
        })
        .then(response => setNews(response.data.news))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <>

        {news ? (
            <Carousel>
                {news.map(newsItem => {
                   return <div key={newsItem.id} className="relative h-96 w-full">
                                <img src={newsItem.image} className="h-full w-full object-cover"></img>

                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                                    <div className="w-3/4 text-center md:w-2/4">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                            >
                                            {newsItem.title}
                                        </Typography>

                                        <Typography
                                        color="white"
                                        className="mb-12 opacity-80"
                                        >
                                            {new Date(newsItem.date).toLocaleDateString()}
                                        </Typography>

                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                            >
                                            {newsItem.body}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                })}
            </Carousel>

        )
        :
        (
            <BlockSpinner />
        )}

        </>
    )
}
