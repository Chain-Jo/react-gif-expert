
export const GifListItems = ({ title, url }) => {

    // console.log({title, Image})
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
        // <li key={ id }>{ title }</li>
    )
}
