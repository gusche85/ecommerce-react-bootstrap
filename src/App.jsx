import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from './components/common';
import { Navibar } from './components/common';
import { Product } from './components/common';

function App() {
  return (
    <>
    <div><Navibar /></div>
    <div><Carousel /></div>
      <div className='text-center m-5'>
        <h1>Pick your Fragrance</h1>
      </div>
    <div><Product /></div>
   </>
  )
}

export default App;
