import React , {Component} from 'react'
import {storePatike,detailPatika} from './data'

const Context = React.createContext()

class Provider extends Component{

    state={
        patike:[],
        detail:detailPatika,
        cart:[],
        cartPrice:0,
        search:[],
        filter:false,
        filter2:[],
        filter2tf:false,
    }

    componentDidMount(){
        this.setPatike()
    }

    setPatike = () => {
        let tempPatike = []
        storePatike.forEach(item=>{
            const singleItem = {...item}
            tempPatike = [...tempPatike,singleItem]
        })
        this.setState(()=>{
            return {patike:tempPatike}
        })
    }

    getItem = id => {
        const patikaid=this.state.patike.find(patika=>patika.id===id)
        return patikaid
    }

    handleDetail = id =>{
        const patikaDetail=this.getItem(id)
        this.setState(()=>{
            return {detail:patikaDetail}
        })
    }

    addToCart = id => {
        let tempPatike = [...this.state.patike]
        const index = tempPatike.indexOf(this.getItem(id))
        const patika = tempPatike[index]
        patika.inCart = true
        this.setState(()=>{
            return {cart:[...this.state.cart,patika]} 
        } ,()=>{
            console.log(this.state)
            this.cartTotalPrice()
        },
        
        )
    }

    removeFromCart = id => {
        let tempPatike = [...this.state.patike]
        let tempCart=[...this.state.cart]

        tempCart=tempCart.filter(item => item.id !== id)

       const index=tempPatike.indexOf(this.getItem(id))
        let removedPatika = tempPatike[index]
        removedPatika.inCart=false; 
        

        this.setState(()=>{
            return {
                cart:[...tempCart],
                patike:[...tempPatike]
            }
        },()=>{
            console.log(this.state)
            this.cartTotalPrice()
        })
    }

    clearCart = () => {

        this.setState(()=>{
            return {
                cart:[],
            }
            }, ()=>{this.setPatike()}
        )
    }

    cartTotalPrice = () => {
        let cartTotal=0
        this.state.cart.map(item=>cartTotal += item.price)
        this.setState(()=>{
            return {cartPrice:cartTotal}
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        const filterInput = e.target.filterInput.value.toLowerCase()
        const srch = this.state.filter2.length ? this.state.filter2 : this.state.patike
        const searched = filterInput ? srch.filter(patika=>patika.title.toLowerCase().includes(filterInput)) : srch
        this.setState(()=>{
            return {
                search: searched,
                filter: filterInput ? true : false,
            }
        },()=>console.log(this.state.search)
        )
        
    }

    filter2Function = (e) => {
        
        const filter2Input = e.target.value
        const searched = filter2Input ? this.state.patike.filter(patika=>patika.namena.includes(filter2Input)) : this.state.filter2 
        this.setState(()=>{
            return {
                filter2: searched ,
                filter2tf: filter2Input ? true : false, 
                search: [] ,
                filter:false,
            }
            
        },()=>console.log(this.state.filter2))
    }

    getUnique(arr,comp) {
        const unique = arr
        .map(e=>e[comp])
        .map((e,i,final)=>final.indexOf(e)===i && i)
        .filter(e=>arr[e])
        .map(e=>arr[e])

        return unique
    }

    removeFilter = () => {
        this.setState(()=>{
            return {
                filter2tf:false,
                search:[],
                filter:false,
                filter2:[],
            }
        })
    }
   
   
    reset =()=> {
        var dropDown = document.getElementById("selectf2");
        dropDown.selectedIndex = 0;
    }



    render(){
        return (
            <Context.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                removeFromCart:this.removeFromCart,
                clearCart:this.clearCart,
                handleChange:this.handleChange,
                filter2Function:this.filter2Function,
                getUnique:this.getUnique,
                removeFilter:this.removeFilter,
                reset:this.reset,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer

export {Provider , Consumer }