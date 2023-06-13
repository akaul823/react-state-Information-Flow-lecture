import Intro from "./Intro.js"
import Cakes from "./Cakes.js"
import bakery from '../images/bakery.avif';
import {cakes} from '../data/data.js'
import Search from "./Search.js"
import Cart from "./Cart.js"

console.log(cakes)

function Bakery(){
    return(
       <>
            <main>
                <Cart />
                <Intro bakery={bakery} />
                <Search />
                <Cakes cakes={cakes} />
            </main>
        </>
    )
}
export default Bakery