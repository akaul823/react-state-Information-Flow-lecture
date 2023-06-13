import Cake from "./Cake.js"

function Cakes({cakes}){

    return(
        <article className="cakes">
        {cakes.map(cake=><Cake key={cake.id} cake={cake} />)}
      </article>
    )
}

export default Cakes