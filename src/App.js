
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>

      <div className='navbar flex justify-between items-center p-4'>
        <div className='flex justify-center items-center md:order-2'>
          <div className='hamburger inline-block p-4 cursor-pointer md:hidden'>
            <div className='line h-0.5 w-6 bg-black my-1'></div>
            <div className='line h-0.5 w-6 bg-black my-1'></div>
            <div className='line h-0.5 w-6 bg-black my-1'></div>
          </div>
          <div className='search md:hidden w-5'><img src='assets/images/search.svg' alt='icon' /></div>
        </div>

        <div className='logo flex text-center items-center md:order-1'>
         <div className='p-2 w-40'><img src="assets/images/logo.png" alt='img' /></div>
          <div className='features bg-gray-200 absolute inset-0 w-fit -translate-x-96 md:w-auto md:bg-white md:static md:-translate-x-0 md:flex md:mx-4 md:space-x-2'>
            <div className='fitem'>Microsoft</div>
            <div className='fitem'>365</div>
            <div className='fitem'>Office</div>
            <div className='fitem'>Windows</div>
            <div className='fitem'>Support</div>
          </div>
        </div>

        <div className='cart flex text-center items-center md:order-3'>
          <div className='search hidden md:block'>All Mircrosoft Search</div>
          <img className='w-5 hidden md:block ml-2 mr-8' src='assets/images/search.svg' alt='icon' />
          <div><img className='w-5' src='assets/images/cart.svg' alt='icon' /></div>
          <div><img className='w-7 ml-4' src='assets/images/user.svg' alt='icon' /></div>

        </div>

      </div>

      <div className='slider flex flex-col-reverse md:flex-row items-center bg-[#e6e6e6] mx-2'>
        <div className='left flex flex-col justify-center items-center md:items-baseline py-12'>
          <h1 className='text-4xl mx-5'>iOS and Android</h1>
          <p className='w-3/4 mx-5 text-center font-medium mt-3 md:text-left'>The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
          <button className='text-white bg-black font-bold px-4 py-2 my-6 mx-5'>Show Now</button>
        </div>
        <div className='right'>
          <img className='w-48 md:w-[64rem] mt-6 md:mt-auto' src='assets/images/computer.jpg' alt='img' />
        </div>
      </div>

      <div className='promo text-center md:flex md:justify-between md:items-center p-8'>
        <div className='item flex items-center md:flex-col mx-4 space-x-2'>
          <img src='assets/images/icon1.jpg' alt='img' />
          <span className='font-bold'>Choose your Microsoft 365</span>
        </div>
        <div className='item flex items-center md:flex-col mx-4 space-x-2'>
          <img src='assets/images/icon2.jpg' alt='img' />
          <span className='font-bold'>Explore Surface Devices</span>
        </div>
        <div className='item flex items-center md:flex-col mx-4 space-x-2'>
          <img src='assets/images/icon3.jpg' alt='img' />
          <span className='font-bold'>Buy Xbox Games</span>
        </div>
        <div className='item flex items-center md:flex-col mx-4 space-x-2'>
          <img src='assets/images/icon4.jpg' alt='img' />
          <span className='font-bold'>Get Windows 11</span>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
