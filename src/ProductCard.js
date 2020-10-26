import React , {Component} from 'react'
import './Product.css'
import {Link} from 'react-router-dom'
import {Consumer} from './context'
import './ProductCard.css'
import {FaShoppingCart} from 'react-icons/fa'

class ProductCard extends Component {
    
    render () {
       
        const {title,id,price,img,inCart} = this.props.patika

        return (
            <div >
                <Consumer>
                    {value=>(
                        <div   key={id} onClick={()=>value.handleDetail(id)}>
                            <Link className='ProductCardLink' to='/detail'>
                                <div>
                                    <h3 className='ProductCardH'>{title}</h3>
                                    <h4>{price}</h4>
                                    <img className='product-img' src={img} alt='patikaimg' ></img>
                                    <br/>
                                </div>
                            </Link>
                                <button className='ProductCardButton' disabled={inCart ? true : false} onClick={()=>value.addToCart(id)}><FaShoppingCart size={20}/></button>
                        </div>
                    )}
                </Consumer>
            </div>
        )
    }
}

export default ProductCard