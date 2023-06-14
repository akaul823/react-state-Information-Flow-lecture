import Intro from "./Intro.js"
import Cakes from "./Cakes.js"
import bakery from '../images/bakery.avif';
import Search from "./Search.js"
import Cart from "./Cart.js"

function Main({data}){
    return(
        <main>
            <Cart />
            <Intro bakery={bakery} />
            <Search />
            <Cakes cakes={data} />
        </main>
    )
}

export default Main