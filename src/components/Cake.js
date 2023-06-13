function Cake({cake:{id,name,image,description,price}}){

    const cakeImgStyle={width:"500px",height:"500px", borderRadius:"10px",boxShadow:"5px 5px 5px black"} 
    
    return(
        <div key={id} className="cake">
            <p className="cake-name" style={{backgroundColor:"orange",borderRadius:"5px",padding:"1rem"}}>{name}</p>
            <img src={image} alt={name} style={cakeImgStyle} className="cake-image" />
            <p className='cake-description'>{description}</p>
            <p className='cake-price'>${price}</p>
            <button>add to cart</button>
        </div>
    )
}

export default Cake