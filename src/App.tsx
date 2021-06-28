import React, { useEffect, useState } from 'react';
import './App.css';
import { IpTable } from './components/ipTable';
import { Loading } from './components/loading';

type IpTableProps = {
  city?: string;
  country?: string;
  hostname?: string;
  ip?: string;
  loc?: string;
  org?: string;
  postal?: string;
  region?: string;
  timezone?: string;
}

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IpTableProps>();

  useEffect(() => {

    fetch(`https://ipinfo.io/?token=${process.env.REACT_APP_TOKEN}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          console.log(error)

          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return (
      <div className="App">
        <header className="App-header">
          {/* @ts-ignore */}
          <div>Error: {error.message}</div>

        </header>
      </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Learn Your Ip Address</h1>
          {isLoaded ?
            <IpTable
              ip={items?.ip}
              hostname={items?.hostname}
              city={items?.city}
              org={items?.org}
              postal={items?.postal}
              timezone={items?.timezone}
            />
            : <Loading />
          }
          <div className="App-footer">
            Copyright © 2021  Made by <a href="https://github.com/erdoganabaci">Erdogan</a>
          </div>
        </header>

      </div>
    );
  }
}
export default App;
