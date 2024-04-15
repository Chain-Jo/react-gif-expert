
export const getGifsApi = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hYF97wuNazpOHBTUtXEcj5MMaLv9ijP6&q=${ category }&limit=8`;
    const respuesta = await fetch( url );
    const {data} = await respuesta.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(data);
    // console.log(gifs);
    return gifs;
}