import { useEffect, useState } from "react";
import { getGifsApi } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifsApi(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        // getGifsApi(category);
        getImages();
        // return
    }, [  ] );


    return {
        images,
        isLoading,
    }
}
