import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;



// Functional component version

// function App() {
//   const [advice, setadvice] = useState("");

// const fetchAdvice = () => {
//   axios
//   .get("https:/api.adviceslip.com/advice")
//   .then((res) => {
//     const { advice } = res.data.slip;
//     console.log(res.data.slip)
//       setadvice({ advice });
//   })
//   .catch((err) => {
//     console.log(err,);
//   });
// }

//   useEffect(() => {
//     fetchAdvice()
//   }, []);

//   return (

//     <>
//     <div className="App">
//       <div className="card">
//         <h1 className="heading">{setadvice}</h1>
//         <button className='button' onClick={fetchAdvice}>
//           <span>GIVE ME ADVICE!</span>
//         </button>
//       </div>
//     </div>

//     </>
//   );
// }

// export default App;