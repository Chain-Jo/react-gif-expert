
import { GifListItems } from "./GifListItems";

import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs( category );

    console.log({ isLoading })

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">   
                {
                    // No se usa image.id o image.title, se desestrucutra
                    images.map(( image ) => (
                        <GifListItems 
                            key={ image.id }
                            { ...image }
                            // title={ image.title }
                            // url={ image.url }
                        />
                    ))
                }
            </div>

        </>
    )
}
