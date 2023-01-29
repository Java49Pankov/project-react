import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';


function App() {
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  const flexRow: React.CSSProperties = { display: "flex", flexDirection: "row" , 
  justifyContent: "space-around", width: "50vw", marginTop: "4vh"}
  const [cityCountries, setCityCountries] = React.useState<string[]>([]);
  function inputProcessFun(value: string): string {
    const cityCountriesFromInput: string[] = value.split("#");
    let res:string = '';
    if(cityCountriesFromInput.length % 2 != 0) {
      res = "There should be even number of the country/cities"
    } else {
        setCityCountries(cityCountriesFromInput.slice());
    }
    return res;
  }
  
  function getTimers(): JSX.Element[] {
    const res: JSX.Element[] = [];
    for(let i = 0; i < cityCountries.length; i+=2) {
      res.push(<div style={flexRow}>
        <Timer cityOrCountry={cityCountries[i]} />
        <Timer cityOrCountry={cityCountries[i + 1]} />
      </div>)
    }

    return res;
  }

  return <div style={flexColumn}>
    <Input placeHolder={'enter city/countries separated by #'}
     inputProcess={inputProcessFun}/>
     {getTimers()}
    

  </div>

}

export default App;
