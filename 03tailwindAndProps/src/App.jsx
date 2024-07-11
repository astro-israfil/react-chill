import './App.css'
import { ProductCard } from './components/ProductCard'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold bg-green-500 text-center py-3 rounded-xl'>Learn Tailwind CSS and props</h1>
      <div className='container flex justify-start flex-wrap'>
      <ProductCard productName='Macbook' btnText='Explore' />
      <ProductCard productName='Macbook' btnText='Explore' />
      <ProductCard btnText='Visit' />
      <ProductCard productName='Macbook' btnText='Explore' />
      </div>
    </>
  )
}

export default App
