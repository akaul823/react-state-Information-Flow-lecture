import cart from "../images/cart.jpeg"

function Header(){
    return(
        <header className="App-header">
            <h1>
                Welcome to my Bakery
            </h1>
            <div className="cart-icon">
                <img src={cart} alt="cart" />
                <span>0</span>
            </div>
        </header>
    )
}

export default Header;