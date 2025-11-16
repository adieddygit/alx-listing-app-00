import React, {useState} from 'react';
import Link from 'next/link';

const Header: React.FC = ()=>{
    const [open, setOpen] = useState(false);
    const filters = ['Rooms', 'Villa', 'Mansion', 'Countryside', 'Beachfront', 'City'];

    return(
        <header className='bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
                <h1 className='text-2xl font-bold text-blue-600'></h1>
            </div>

            {/* On Desktop */}
            <nav className='hidden md:flex gap-6 items-center'>
                {filters.map((filter)=>(
                    <span key={filter} className='px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-100 cursor-pointer'>
                        {filter}
                    </span>
                ))}
                <Link href='/signin' className='text-gray-700 hover:text-blue-600'>Sign In</Link>
                <Link href='/signup' className='px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700'>Sign Up</Link>
            </nav>

            {/* On Mobile */}
            {/* Hamburger */}
            <button className='md:hidden text-2xl' onClick={()=>setOpen(!open)}>
                <span className='block bg-blue-500 w-1 h-[3px m-5 rounded]'></span>
                <span className='block bg-blue-500 w-1 h-[3px m-5 rounded]'></span>
                <span className='block bg-blue-500 w-1 h-[3px m-5 rounded]'></span>
            </button>

            {/* Mobile Menu */}
            {open &&(
                <div className='md:hidden p-4 space-y-2 bg-white shadow'>
                    {filters.map((filter)=>(
                        <span key={filter} className='block px-3 py-2 bg-gray-100 rounded-full'>{filter}</span>
                    ))}
                    <Link href={'/signin'} className='block text-gray-700'>Sing In</Link>
                    <Link href={'/signup'} className='block px-3 py-1 bg-blue-600 text-white rounded'>Sing In</Link>
                </div>
            )}
        </header>
    );
};

export default Header;