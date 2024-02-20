import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from './components/common';
import { Navibar } from './components/common';
import { Product, Product1 } from './components/common';

function App() {
  return (
    <>
    <Navibar />
    <Carousel />
      <div className='text-center m-5'>
        <h1>Pick your Fragrance</h1>
      </div>
    <Product />
    <Product1 />
   </>
  )
}

export default App;
