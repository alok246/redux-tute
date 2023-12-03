// import Home from '../components/Home'
// export default Home;

import {connect} from 'react-redux'
import Header from '../components/Header'
//import {addToCart} from '../Services/Actions/actions'//no need of function yaha no call

const mapStateToProps=state=>({
    //cardData:state
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    //addToCartHandler:data=>dispatch(addToCart(data))// function home se trigger ho hi jayega so no need of this function
})

export default connect(mapStateToProps,mapDispatchToProps)(Header) //Header for earlier calling

//export default Home;
//Homecontainer already call ho raha hai app.js ke andar