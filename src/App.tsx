import React from 'react';
import { Timer } from './components/Timer';
import { Input } from './components/Input';



function App() {
  // const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  // const flexRow: React.CSSProperties = {
  //   display: "flex", flexDirection: "row",
  //   justifyContent: "space-around", width: "50vw", marginTop: "4vh"
  // }
  const properties: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap"
  }

  const [cityCountry, setCityCountry] = React.useState<string[]>([]);

  function creatingDivs(valueCityCountry: string): string {
    valueCityCountry = valueCityCountry.toLowerCase();
    valueCityCountry = valueCityCountry.charAt(0).toUpperCase() + cityCountry.slice(1)
    const cityOrCountry: string[] = valueCityCountry.split("#");
    setCityCountry(cityOrCountry.slice());
    return ''
  }

  function getDivs(cityCountry: string[]): JSX.Element[] {
    return cityCountry.map(value => <div><Timer cityOrCountry={value}></Timer></div>)
  }

  return <section style={{ display: "flex", flexDirection: "column" }}>
    <Input placeHolder={'enter cities or countries separated by #'} inputProcess={creatingDivs} ></Input>
    <section style={properties}>
      {getDivs(cityCountry)}
    </section>
  </section >

}

export default App;
