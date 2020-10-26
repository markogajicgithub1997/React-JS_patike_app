import React,{Component } from 'react'
import {Consumer} from './context'
import './Filter.css'
import {FaSearch} from 'react-icons/fa'

class Filter extends Component{
    render(){
        return (
            <div >
                <Consumer>
                 {value=>{
                     return (
                         <div className='filter'>
                            <form className='form' onSubmit={(e)=>value.handleChange(e)}>
                                <input className='input' type='text'  placeholder='Search for sneakers' name='filterInput' />
                                <button className='button' type='submit'><FaSearch className='searchIcon' /></button>
                            </form>
                         </div>
                     )
                 }}
                 </Consumer>
            </div>
        )
    }
        
}

export default Filter