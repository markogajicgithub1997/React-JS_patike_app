import React , {Component} from 'react'
import {Consumer} from './context'
import {Link} from 'react-router-dom'
import './Detail.css'
import {FaShoppingCart, FaHome} from 'react-icons/fa'

class Detail extends Component {
    render () {
        return (
            <div className='detail'>
            <Consumer>
                {value=>{
                    const{title,price,img,inCart,id}=value.detail;
                    return (
                        <div className='detailDiv'>
                        <div className='detailDiv2' >
                            <h3 className='detailTextT'>{title}</h3>
                            <h4 className='detailTextP'>{price}</h4>
                            <img className='product-detail-img' src={img} alt='patikaimg' ></img>
                            <br/>
                            <button className='detail-btn' onClick={()=>value.addToCart(id)} disabled={inCart ? true : false}><FaShoppingCart size={35}/></button>
                        </div>
                        <Link to='/'><button className='detailHomeBtn'><FaHome size={35}/></button></Link>
                        </div>
                    )
                }}
            </Consumer>
            
            </div>
        )
    }
}

export default Detail