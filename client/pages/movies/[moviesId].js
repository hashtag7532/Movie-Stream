import {useRouter} from 'next/router'
import Card from '../../components/Card'
import data from "../../data"

const cards = data.map(item=>{
    return (
        <Card 
            img={item.coverImg}
            rating={item.rating}
            duration={item.duration}
        />
    )
})

function MovieDetails(){
    const router = useRouter()
    const moviesId = router.query.moviesId
    return (
    <div>
        <h1>Movie {moviesId}</h1>
        <div className='grid grid-cols-4'>{cards}</div>
    </div>
    )
}


export default MovieDetails