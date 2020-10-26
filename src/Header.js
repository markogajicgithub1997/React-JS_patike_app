import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {FaShoppingCart, FaHome} from 'react-icons/fa'


class Header extends Component {
    render (){
        return (
            <div className='Header'>
                <ul className='HeaderUl'>
                    <li className='HeaderLi'><Link className='HeaderLink' to='/'><FaHome/></Link></li>
                    <li className='HeaderLi'><Link className='HeaderLink' to ='/contact'>Contact us</Link></li>
                    <li className='HeaderLi'><Link className='HeaderLink' to='/about'>About us</Link></li>
                </ul>
                <ul className='HeaderUl2'>
                    <li className='HeaderLiCart'><Link className='HeaderLink' to='/cart'><FaShoppingCart className='cartIcon' /> </Link>  </li>
                </ul>
            </div>
        )
    }
}

export default Header