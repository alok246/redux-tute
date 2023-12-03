import React from 'react'
//import Iphone from '../Iphone.jpg';

//function Home() {
function Header(props) {
    //console.warn("props", props)
    console.warn("Header", props.data)
    //addtocart as an props milna chahiye taaki button click ke upper call kr saku

    return (
        <div>
            <div>
                <div className="add-to-cart">
                    <span className="cart-count">{props.data.length}</span>
                    <img src='https://i.pngimg.me/thumb/f/720/comvecteezy499810.jpg' />
                </div>
            </div>
        </div>
    )

}
export default Header;