import React from 'react'
import Iphone from '../Iphone.jpg';

function Home() {
    return (
        <div>
            <div>
                <div className="add-to-cart">
                    <img src='https://i.pngimg.me/thumb/f/720/comvecteezy499810.jpg' />
                </div>
            </div>
            <h1>Home component</h1>


            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img src={Iphone} alt=""/>
                {/* <img src='https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D' alt="" /> */}
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )

}
export default Home;