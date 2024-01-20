import img from '../assets/profile-icon/Profile pic.svg';
import digitalId from '../assets/Untitled design-2 1.png';
import linkedin from '../../src/assets/profile-icon/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587 1.png'
import twitter from '../../src/assets/profile-icon/Intersect.svg'
import share from '../../src/assets/profile-icon/Forward Arrow.png'
import edit from '../../src/assets/profile-icon/Rectangle 3467534.png'
import Pencil from '../../src/assets/profile-icon/Pencil.png'
import { ProductCard } from '../App';
import slider from '../../src/assets/profile-icon/Slider.png'
import { FaSearch } from 'react-icons/fa';
import home from '../../src/assets/profile-icon/Home.png'
import name from '../../src/assets/profile-icon/Name.png'
import auto from '../../src/assets/profile-icon/Automatic.png'
import mail from '../../src/assets/profile-icon/Mail.png'

const Profile = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mt-4 md:mt-12 gap-6">
                <div className="w-full md:w-[40%]">
                    <div className="p-5 rounded-lg bg-white bg-opacity-75 border-white border-2">
                        <div className='md:w-48 md:h-48 w-32 h-32 rounded-full mx-auto border-4 border-[#7065F0] relative'>
                            <img src={img} className='w-full h-full' alt="" />
                            <img src={Pencil} className='absolute top-[75%] right-1 bg-white  rounded-full border-2 border-[#7065F0] md:w-9 md:h-9 w-6 h-6 p-1' alt="" />
                        </div>
                        <h1 className='text-3xl md:text-5xl font-semibold text-center text-[#0E0A55] mt-2'>Waqas Tariq</h1>
                        <p className='text-center font-medium text-xl md:text-2xl text-[#0E0A55] mt-4 mb-2'>mubeentariq640@gmail.com</p>
                        <p className='text-center font-medium text-xl md:text-2xl text-[#0E0A55] mt-3 '>02/11/2024</p>
                        <p className='text-center font-medium text-xl md:text-2xl text-[#0E0A55] mt-2 '>About us</p>
                        <div className='text-center'>
                            <button className="btn font-semibold text-2xl py-3 px-10 rounded-xl mt-14 md:mt-16 bg-[#7065F0] text-white">Upgrade</button>
                        </div>
                    </div>
                    <div className='mt-4 p-5 rounded-lg bg-white bg-opacity-75 border-white border-2'>
                        <p className='font-bold text-center text-base md:text-2xl text-[#0E0A55]'>Why Digital iD verification by Australia Post?</p>
                        <p className='font-medium text-center text-[#0E0A55] text-xs md:text-xl mt-2'>Stand out as a verified member and join a community that values safety, integrity, and transparency.</p>
                        <div className='text-center'>
                            <button className="btn font-semibold text-2xl py-3 px-10 rounded-xl mt-5 border-2 border-[#7065F0] text-[#7065F0] "><img src={digitalId} className='w-18' alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[60%] ">
                    <div className='rounded-lg bg-white bg-opacity-75'>
                        <div className='py-2 px-6 flex items-center justify-between  border-white border-4'>
                            <p className='font-bold text-base md:text-2xl text-[#0E0A55]'>Listing Status</p>
                            <div className='flex items-center gap-2'>
                                <img src={linkedin} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                                <img src={twitter} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                                <span><img src={share} className='bg-[#7065F0] w-12 md:w-14 py-1 px-3 rounded-md border-b-2 border-white' alt="" /></span>
                            </div>
                        </div>
                        <div className='py-7 px-6'>
                            <div className=' flex flex-col gap-5'>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>House Type</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Looking Place</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Room Features </p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Occupation</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Amenities</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Place Friendliness</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Listing Status</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Gender</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Public Transport </p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                                <div className='flex items-center '>
                                    <p className='w-[40%] text-[14px] md:text-2xl font-medium text-[#0E0A55]'>Nearby Community</p>
                                    <p className='w-[60%] bg-[#eaeaec2c] px-7 py-5 text-2xl font-medium border-4 border-white rounded-lg'></p>
                                </div>
                            </div>
                            <div className='mt-14 flex items-center gap-6 md:gap-24 justify-center'>
                                <button className="btn font-semibold text-xl md:text-2xl py-3 w-[143px] md:w-[212px] rounded-xl bg-[#0E0A55] text-white">Edit</button>
                                <button className="btn font-semibold text-xl md:text-2xl py-3 w-[143px] md:w-[212px] rounded-xl bg-[#f3f1ff] text-[#7065F0]">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 md:mt-7  md:p-7 p-3 bg-white bg-opacity-50  rounded-lg border-white border-2 '>
                <div className='flex justify-between items-center pb-3 md:pb-7'>
                    <p className='text-xl md:text-3xl font-bold text-[#0E0A55] '>Matches</p>
                    <div className='flex items-center gap-3 md:gap-4'>
                        <img src={slider} className='w-6 md:w-10' alt="" />
                        <FaSearch className='text-[#7065F0] text-lg md:text-3xl' />
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5'>
                    {new Array(8).fill(0).map(() => <>
                        <ProductCard />
                    </>)}
                </div>
            </div>

            <div className='fixed md:hidden bottom-0 w-full left-0 p-2  '>
                <div className='flex items-center justify-between rounded-lg bg-[#f3f3fa]  border-4 border-white px-7 py-2'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={home} className='w-7 h-7 ' alt="" />
                        <p className='font-medium text-base text-[#0E0A55]'>Home</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={home} className='w-7 h-7 ' alt="" />
                        <p className='font-medium text-base text-[#0E0A55]'>Profile</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={home} className='w-7 h-7 ' alt="" />
                        <p className='font-medium text-base text-[#0E0A55]'>Inbox</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={home} className='w-7 h-7 ' alt="" />
                        <p className='font-medium text-base text-[#0E0A55]'>Setting</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;