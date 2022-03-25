import './App.css';
import PurchaseArea from './component/PurchaseArea/PurchaseArea';

function App() {
  return (
    <div className='my-5'>
      <h1 className='text-center fw-bolder text-primary font-size '>Anime Selector</h1>
      <h2 className='text-center fw-bolder'>Choose 4 Anime</h2>
      <PurchaseArea></PurchaseArea>
    </div>
  );
}

export default App;
