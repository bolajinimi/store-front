import './App.css';

import Header from './components/header-tag';
import Icon from './components/icon';
import Products from './components/products';

function App() {
  return (
    <div className='Store'>

      {/* Store-header */}

      <Header />

      {/* backgroundImage */}

      <div className="backgroundImage">
        <div className='productCard'>
          <h5 className='cardHeader2'>New Arrival</h5>
          <h1 className='cardHeader1'>Discover our New Collection</h1>
          <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
          <button className='btn'>BUY NOW</button>
        </div>
      </div>

      {/* Icon */}

      <div className='Icon-tag row'>
        <Icon name="Free Delivery"  svg="./free-delivery.svg" desc="Lorem ipsum dolor sit amet."/>
        <Icon name="Support 24/7"  svg="./support247.svg" desc="Lorem ipsum dolor sit amet."/>
        <Icon name="100% Authentic" svg="./authentic.svg" desc="Lorem ipsum dolor sit amet."/>
      </div>

      {/* storeAPI */}
      
      <div>
        <Products />
      </div>
    </div>
  );
}

export default App;
