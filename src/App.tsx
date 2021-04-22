import React from 'react';
import './App.css';

//import CustomHeader from './components/CustomHeader'
import Counter from './components/Counter'
import CustomHeader from './components/CustomHeader';
const App = () => {

  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange =(newNumber: number) =>{
    setChangedNumber(newNumber);
  }

  const liczbaMniejszaOdZera = (liczba: number) => {

    if(liczba <0 && liczba >=-10)
    {
      return (<div>liczba jest mniejsza od zera</div>)
    }
    else if(liczba>10 && liczba<16)
    {
      return (<div>liczba jest wieksza od 10</div>)
    }
    if(liczba< -10)
    {
      return (<div>liczba jest mniejsza od -10</div>)
    }
    else if(liczba>15)
    {
      return (<div>Liczba przekroczona</div>)
    }
    else if(liczba==0)
    {
      return (<div></div>)
    }

  }
  return (

    <div className="App">
      <CustomHeader>
        <Counter onNumberChange = { handleNumberChange } />
        {
          changedNumber >0 && changedNumber <=10 && (<div> liczba jest wieksza od 0</div>) 
        }
        {liczbaMniejszaOdZera(changedNumber)}
      </CustomHeader>
     
    </div>
  );

}

export default App;