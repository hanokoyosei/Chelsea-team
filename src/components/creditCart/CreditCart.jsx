import React, {useState} from 'react'; 
import Cards from 'react-credit-cards'; 
import { Button, Input, InputNumber } from 'antd'; 
import 'react-credit-cards/es/styles-compiled.css' 
import "./CreditCart.css"
 
  
 function PaymentForm (){ 

 const[state,setState] = useState( 
    { 
        cvc: '', 
        expiry: '', 
        focus: '', 
        name: '', 
        number: '', 
      } 
 ) 
 
 const [numberState, setNumberState] = React.useState(''); 
  
 const handleInputFocus = (e) => { 
    setState({ ...state,focus: e.target.name }); 
  } 
   
  const handleInputChange = (e) => { 
   
    const { name, value } = e.target; 
    
    setState({...state, [name]: value }); 
  } 
 
 
  let regex = /\d{0,16}?/gi 
  const handleInputChangeNumber = (e) => { 
    const { name, value } = e.target; 
    const haveLetters = (str) => { 
        let alphabet = 'qwertyuiopasdfghjklzxcvbnm' 
        return str.split('').some(letter => alphabet.includes(letter)) 
    } 
    if(regex.test(value) && value.length < 17 && !haveLetters(value)){ 
        console.log('regex passed') 
        setNumberState(value) 
        setState({...state, [name]: value }); 
    } else { 
        setNumberState(numberState) 
    } 
  } 
 
     return ( 
      <div  id="PaymentForm"> 
        <Cards 
          cvc={state.cvc} 
          expiry={state.expiry} 
          focused={state.focus} 
          name={state.name} 
          number={state.number} 
        /> 
        <form id="PaymentInput"> 
         
            <Input  
            // type="number" 
            name="number" 
            placeholder="Card Number" 
            // maxLength={16} 
            value={numberState} 
            onChange={handleInputChangeNumber} 
            // onChange={handleInputChange} 
            onFocus={handleInputFocus} 
            // style={{ minWidth: 200 }} 
            /> 
 
            <Input   
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={handleInputChange} 
            onFocus={handleInputFocus} 
            />   
 
 
            <Input   
            type="number" 
            name="cvc" 
            placeholder="CVC" 
            onChange={handleInputChange} 
            onFocus={handleInputFocus} 
            />  
 
 
            <Input   
              type="number" 
              name="expiry" 
              placeholder="VALID/THRU" 
              onChange={handleInputChange} 
              onFocus={handleInputFocus} 
            /> 
           
           
        </form> 
        <Button style={{marginTop:"50px" ,background:"#001489", color:"white" }}>FINISH</Button>
       
      </div> 
    ); 
  } 
 
export default PaymentForm