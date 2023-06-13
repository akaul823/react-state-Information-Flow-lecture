import Intro from "./Intro.js"
import Cakes from "./Cakes.js"
import bakery from '../images/bakery.avif';
import {cakes} from '../data/data.js'

console.log(cakes)

function Bakery(){
    return(
       <>
            <main>
                <Intro bakery={bakery} />
                <Cakes cakes={cakes} />
            </main>
        </>
    )
}
export default Bakery