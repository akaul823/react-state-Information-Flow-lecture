import {data} from '../data/data.js'
import Main from "./Main"
import Header from "./Header"

console.log(data)

function Bakery(){
    return(
        <>
            <Header />
            <Main data={data} />
        </>
        
    )
}
export default Bakery