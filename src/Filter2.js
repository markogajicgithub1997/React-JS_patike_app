import React,{Component} from 'react'
import {Consumer} from './context'
import './Filter2.css'

class Filter2 extends Component {
    render(){
        return (
            <div>
                <Consumer>
                    
                    {value=>{
                        const uniquePatika = value.getUnique(value.patike , 'namena')
                        const removeFilter = value.filter2tf || value.filter ? <input className='button-restart' id="btnReset" type="button" value="Remove filter" onClick={()=>{value.removeFilter();value.reset()}} /> : []
                        
                        return (
                            <div className='filter2'>
                                <select className='select' defaultValue='def' id='selectf2' onChange={(e)=>value.filter2Function(e)}>
                                <option value='def' disabled  >Select filter</option>
                            {uniquePatika.map(patika=>(
                                <option className='option' key={patika.id} placeholder='select'>
                                    {patika.namena}
                                </option>
                            ))}
                                </select>
                                <br/>
                                {removeFilter}
                                
                            </div>
                                      
                        )
                        
                    }}
                    
                </Consumer>
            </div>
        )
    }
}

export default Filter2