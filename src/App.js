import React, { useState } from 'react';
import './App.css';

const  App = ()=> {
  const [state , setState] = useState({
    value: '',
    count: 0,
  })
  const handleValue = (event) => {
    setState({...state, value:event.target.value })

  }
  const handleNote = () => {
    const value = state.value,
      oneDot = ['ب', 'ج', 'خ', 'ذ', 'ز', 'ض', 'ظ', 'غ', 'ن'],       
      twoDot = ['ت', 'ق'],
      terdDot = ['پ', 'ث', 'چ', 'ش'],
      exception = ['ی']

    
    let text = value.split('')

    let dots = 0;
    for (let i = 0; i < text.length; i++) {
      let letters = text[i]
      if (oneDot.includes(letters)) {
        dots++
      }
      if (twoDot.includes(letters)) {
        dots += 2
      }
      if (terdDot.includes(letters)) {
        dots += 3
      }
      if (exception.includes(letters) && i !== text.length - 1) {
        if (text[i + 1] !== ' ') {
          dots += 2
        }
      }
      
      
      setState({ ...state, count: dots})
      setTimeout(() => {
        setState({ ...state, count:0, value:''})
      }, 4000);
    }

  }
  return (
    <div className="App">
      <span className="span">یه متن،جمله یا کلمه بنویس تا بهت بگم چنتا نقطه داره</span>
      <input type="text" className="input" value={state.value} onChange={handleValue}/>
      <button onClick={handleNote} className="btn">بشمار</button>
      <span className="span">تعداد نقطه ها:{state.count}</span>
    </div>
  );
}

export default App;
