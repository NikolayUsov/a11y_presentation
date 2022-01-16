import Header from './components/Header';
import Promo from './components/Promo/';
import Advantages from './components/Advantages';
import Catalog from './components/Catalog';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div role="main" aria-labelledby="title1">

          <h1 id="title1" className='visuallyHidden'>Основная страница магазина</h1>
        <Promo />
        <Advantages />
        <Catalog />
        <OrderForm />
      </div>

    </div>

  );
}

export default App;
