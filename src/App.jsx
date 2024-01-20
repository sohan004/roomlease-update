

import bol from './assets/bol3.png'
import logoHome from './assets/logoHome.png'
import logo from './assets/Untitled design 4.png'
import digitalIdIcon from './assets/Untitled design-2 1.png'
import { FaRegHeart, FaSearch } from 'react-icons/fa'
import { RiMessage2Line } from 'react-icons/ri'
import { BiSolidMessageDots } from 'react-icons/bi'
import { IoCarSharp } from 'react-icons/io5'
import img from '../src/assets/Rectangle 41933.png'
import Profile from './Profile/Profile'

const App = () => {
  return (
    <div className="bg-[#F9F8FD] p-2 md:p-5">
      <div className="max-w-[1576px] mx-auto">
        <Nav />
      </div>


      <div className='max-w-[1576px] mx-auto'>

        {/* home page section */}
        <HomeSection />

        {/* profile page section */}
        {/* <Profile></Profile> */}
      </div>
    </div>
  );
};

export default App;

const HomeSection = () => {
  return (
    <>
      <HeadersTitle />
      <SearchInput />
      <div className='mt-4 md:mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-7 p-3 bg-white bg-opacity-50  rounded-lg border-white border-2 gap-2 md:gap-5'>
        {new Array(8).fill(0).map(() => <>
          <ProductCard />
        </>)}
      </div>
    </>
  )
}


const Nav = () => {
  return (
    <div className="md:py-4 md:px-2 md:bg-white md:bg-opacity-75 md:border-2 border-white rounded-lg flex items-center justify-between">
      <img src={logo} className='w-[140px] md:w-[250px]' alt="" />
      <div className='flex items-center gap-[5px] md:gap-[18px]'>
        <button className='py-[9px] md:py-4 px-[4px] md:px-[6px] lg:px-8 text-[10px] md:text-lg font-bold bg-[#EDECFB] hover:bg-[#d7d5fc] text-[#7065F0] rounded-lg md:rounded-xl active:scale-90 duration-75'>List Home</button>
        <button className='py-[9px] md:py-4 px-[4px] md:px-[6px] lg:px-8 text-[10px] md:text-lg font-bold bg-[#EDECFB] hover:bg-[#d7d5fc] text-[#7065F0] rounded-lg md:rounded-xl active:scale-90 duration-75'>Sign Up</button>
        <button className='py-[9px] md:py-4 px-[4px] md:px-[6px] lg:px-8 text-[10px] md:text-lg font-bold bg-[#7065F0] hover:bg-[#6659ee] text-[#EDECFB] rounded-lg md:rounded-xl active:scale-90 duration-75'>List Home</button>
      </div>
    </div>
  )
}


const HeadersTitle = () => {
  return (
    <div className=' text-xs md:text-lg lg:text-2xl font-semibold text-center text-[#0E0A55] mt-[32px] leading-5'>
      <span>Earn income from your spare room safely by Australia post’s</span>
      <span className='font-bold  digital-id'> Digital ID </span>
      <span>verification for free</span>
    </div>
  )
}


const SearchInput = () => {
  return (
    <div className='relative mt-[17px] mb-7 max-w-[1300px] w-full mx-auto rounded-xl bg-white bg-opacity-75 border-2 border-white flex items-center gap-2 md:gap-[60px]  lg:gap-[150px] '>
      <div className='flex items-center justify-between p-[10px]  md:p-[14px] flex-1 gap-1 '>
        <input type="text" placeholder='Enter Suburb Name' className='bg-transparent  outline-none  md:placeholder:font-bold md:placeholder:text-[#0E0A55] w-5 flex-1' />
        <div className='flex items-center bg-gray-100 rounded-lg '>
          <button className='text-xs md:text-xl py-2 md:py-4  bg-[#7065F0]  text-white rounded-xl shadow-lg w-[70px] md:w-[146px]'>Room</button>
          <button className='text-xs md:text-xl py-2 md:py-4 w-[70px] md:w-[146px] rounded-xl'>Flatmate</button>
        </div>
      </div>
      <div className='py-4 px-4 md:px-6 h-[55px] md:h-[90px] relative bg-[#7065F0] flex items-center justify-center text-base md:text-3xl text-white md:w-[112px] rounded-r-xl'>
        <FaSearch />
      </div>

      {/* <RoomModal /> */}
      {/* <FlatmateModal /> */}


    </div>
  )
}


const RoomModal = () => {
  return (
    <div className='absolute max-w-[626px] w-full left-2/4 -translate-x-2/4 pb-[50px] px-3 md:px-8 py-2 md:py-4 top-[115%] bg-white bg-opacity-75 backdrop-blur rounded-lg'>
      <div className='flex items-start gap-2 '>
        <div className='w-[40%]'>
          <p className='text-base md:text-2xl font-semibold text-[#0E0A55] mt-[5px]'>Rent per week</p>
          <p className='text-base md:text-2xl font-semibold text-[#0E0A55] mt-[42px]'>Bedroom type</p>
          <p className='text-base md:text-2xl font-semibold text-[#0E0A55] mt-[42px]'>Private Bathroom</p>
        </div>
        <div className='w-[60%]'>
          <div className='flex items-center justify-between'>
            <input type="text" placeholder='Min $' className=' outline-none text-[#0E0A55] w-[85px] md:w-[121px] bg-[#ffffff] font-semibold p-1 md:p-2 bg-opacity-50 rounded-lg border-2 border-white' />
            <p className='md:text-2xl mx-1 font-semibold text-[#0E0A55]'>to</p>
            <input type="text" placeholder='Max $' className=' outline-none text-[#0E0A55] w-[85px] md:w-[121px] bg-[#ffffff] font-semibold p-1 md:p-2 bg-opacity-50 rounded-lg border-2 border-white' />
          </div>
          <div className='flex items-center justify-between mt-7'>
            <button className='py-2 text-sm md:text-base md:py-3 px-2 md:px-5 w-[80px] md:w-[121px] rounded-xl text-white bg-[#7065F0]'>Private</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-2 md:px-5 w-[80px] md:w-[121px] rounded-xl text-[#0E0A55] bg-[#ffffff]'>Shared</button>
          </div>
          <div className='flex items-center justify-between mt-7'>
            <button className='py-2 text-sm md:text-base md:py-3 px-2 md:px-5 w-[80px] md:w-[121px] rounded-xl text-white bg-[#7065F0]'>Yes</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-2 md:px-5 w-[80px] md:w-[121px] rounded-xl text-[#0E0A55] bg-[#ffffff]'>No</button>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <input type="checkbox" name="" id="" />
        <p className='font-semibold text-[#0E0A55]'>Bills included</p>
      </div>
    </div>
  )
}


const FlatmateModal = () => {
  return (
    <div className='absolute max-w-[850px] w-full left-2/4 -translate-x-2/4  px-3 md:px-8 py-2 md:py-4 top-[115%] bg-white bg-opacity-75 backdrop-blur rounded-lg'>
      <div className='flex items-start gap-2 '>
        <div className='w-[40%]'>
          <p className='text-base md:text-2xl font-semibold text-[#0E0A55] mt-[5px]'>Age Range </p>
        </div>
        <div className='w-[60%]'>
          <div className='flex items-center gap-1 md:gap-2 flex-wrap  '>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5 me-2 md:me-4 border-2 border-white   rounded-lg text-white bg-[#7065F0]'>Any</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>18 - 25</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>26-35</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>36-50</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>51-70+</button>
          </div>
        </div>
      </div>
      <div className='flex items-start gap-2 mt-5'>
        <div className='w-[40%]'>
          <p className='text-base md:text-2xl font-semibold text-[#0E0A55] mt-[5px]'>Gender</p>
        </div>
        <div className='w-[60%]'>
          <div className='flex items-center gap-1 md:gap-2 flex-wrap  '>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5 me-2 md:me-4 border-2 border-white  rounded-lg text-white bg-[#7065F0]'>Any</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>Male</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>Female</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>LGBTIQA+</button>
          </div>
        </div>
      </div>
      <div className='flex items-start gap-2 mt-5'>
        <div className='w-[40%]'>
          <p className='text-base md:text-2xl font-semibold text-[#0E0A55] mt-[5px]'>IDs & Checks </p>
        </div>
        <div className='w-[60%]'>
          <div className='flex items-center gap-1 md:gap-2 flex-wrap  '>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5 me-2 md:me-4 border-2 border-white rounded-lg text-white bg-[#7065F0]'>Pay Slip</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>Passport</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>26-35</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>Reference</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>Driving license</button>
            <button className='py-2 text-sm md:text-base md:py-3 px-3 md:px-5  rounded-lg text-[#0E0A55] bg-[#ffffff]'>Student ID</button>
          </div>
        </div>
      </div>
    </div>
  )
}



export const ProductCard = () => {
  return (
    <div className='w-full bg-[#eee8ff] bg-opacity-40  border-white border-3 rounded-lg'>
      <img src={img} className='w-full h-[70px] md:h-[230px] rounded-md rounded-b-none md:rounded-b-lg md:rounded-lg' alt="" />
      <div className='p-[8px] md:p-[10px] pb-2 border-b-2 border-gray-100'>
        <div className='mt-1 md:mt-3 flex items-center justify-between'>
          <p className='text-xs md:text-lg font-bold text-[#0E0A55]'>$1,490,990 <span className='font-medium'>/week</span></p>
          <div className='flex items-center gap-1 md:gap-3'>
            <BiSolidMessageDots className='text-xs md:text-2xl text-[#7065F0]' />
            <FaRegHeart className='text-xs md:text-2xl text-[#7065F0]' />
          </div>
        </div>
        <p className='mt-1 md:mt-3 text-[10px] md:text-[16px] max-w-60 text-gray-500 font-medium'>4209 Meadow Hawk Drive Arlington, TX 76005</p>
      </div>
      <div className='p-[8px] md:p-[10px]'>
        <p className='flex items-center gap-1 text-[#7065F0]'><IoCarSharp className=' md:text-2xl' /><span className='text-gray-500 font-medium text-[10px] md:text-base'>Garage</span></p>
      </div>
    </div>
  )
}