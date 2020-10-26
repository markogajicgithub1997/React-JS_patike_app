import React , {Component} from 'react'
import ProductCard from './ProductCard'
import {Consumer} from './context'
import Filter from './Filter'
import Filter2 from './Filter2'
import './Home.css'

class Home extends Component {
    render(){
        return (
            <div className='homee'>
                <div className='homeFilter'>
                <Filter />
                <Filter2 />
                </div>
                <Consumer>
                    {value=>{
                        if (value.filter2tf) {
                            if (value.filter) {
                                const mapPatike2 = value.search.length ? value.search : value.filter2
                            return (
                                <div className='home'>
                                    <div className='text'>{value.search.length ? <h2>That was found:</h2> : <h2>Nothing was found,try some of these sneakers !?</h2>}</div>
                                    {mapPatike2.map(item=>{
                                        return (
                                            <div className='product-card'> <ProductCard key={item.id} patika={item} /></div>
                                        )
                                    })}
                                </div>
                                )
                            }
                            else {
                                return (
                                    <div className='home'>
                                        {value.filter2.map(item=>{
                                            return (
                                                <div className='product-card'> <ProductCard key={item.id} patika={item} /></div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                            
                        }
                        else {
                            if(value.filter){
                                const mapPatike = value.search.length ? value.search : value.patike
                                return (
                                    <div className='home'>
                                        <div className='text'>{value.search.length ? <h2>That was found :</h2> : <h2>Nothing was found,try some of these sneakers ?!</h2>}</div>
                                        {mapPatike.map(item=>{
                                            return (
                                                <div className='product-card'> <ProductCard key={item.id} patika={item} /></div>
                                            )
                                        })}
                                    </div>
                                ) 
                            }
                            else {
                                return (
                                    <div className='home'>
                                        {value.patike.map(item=>{
                                            return (
                                                <div className='product-card'> <ProductCard key={item.id} patika={item} /></div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                        }
                        
                    }}
                </Consumer>
            </div>
        )
    }
}

export default Home