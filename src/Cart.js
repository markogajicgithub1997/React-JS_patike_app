import React , {Component} from 'react'
import {Consumer} from './context'
import './Cart.css'
import CartItems from './CartItems'
import {FaTrash} from 'react-icons/fa'

class Cart extends Component {
    render () {
        return (
            <Consumer>
                {value=>{
                    if (value.cart.length) {
                        return (
                            <div>
                                <CartItems/>
                                {value.cart.map(tika=>{
                                    
                                        return (
                                            <div className='cartDiv' key={tika.id}>
                                                <div className='cartItem'><img className='cart-img' src={tika.img} alt='patikaimg' ></img></div>
                                                <h3 className='cartItem'>{tika.title}</h3>
                                                <h4 className='cartItem'>{tika.price}</h4>
                                                
                                                <br/>
                                                <div className='cartItem'><button className='cartButton' onClick={()=>value.removeFromCart(tika.id)}><FaTrash size={30}/></button></div> 
                                            </div>
                                        )  
                                })}
                                <div className='cartDiv2'>
                                <p className='cart2items'>Total price:{value.cartPrice}</p>
                                <div className='cart2items'><button className='cart2button' onClick={()=>value.clearCart()}><div className='clear'>Clear</div> <div><FaTrash size={40}/></div></button></div>
                                <div className='cart2items'><button className='cart2buttonBuy'>Buy Articles</button> </div>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='cartElse'><h1>Cart empty</h1></div>
                        )
                    }

                }}
            </Consumer>
        )
    }
}


export default Cart