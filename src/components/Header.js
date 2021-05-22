import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon, XIcon, ChevronRightIcon} from "@heroicons/react/outline";
import {UserCircleIcon} from "@heroicons/react/solid";
import { useState} from 'react';
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
function Header() {

const [transparency, setTransparency ] = useState('hidden');
const [transform, setTransform] = useState('-500px');

const [session] = useSession();
const router = useRouter(); 
// it will obj.
// session.user. 

const items = useSelector(selectItems);

    return (
        <header className="relative">
            <div className="bg-white w-72 absolute z-50 h-screen duration-100" style={{left:transform}}>
            <XIcon className="absolute h-6 text-white right-6 top-2 cursor-pointer"
            onClick={()=>{
                setTransform('-500px')
                setTransparency('hidden');
                document.body.style.overflow='unset';
            }} />
<div className="bg-amazon_blue-light w-full h-12 flex items-center">
    <div className="mx-4 flex items-center space-x-4 text-white font-bold">
    {session ? ( <>
        <Image src={session.user.image} loading="lazy" objectFit="contain" width={40} height={40}
                        className="cursor-pointer br-50" />
                        <p>Hello,&nbsp;{session.user.name}</p>
                        </>
                    ):
                    (
                        <>
                        <UserCircleIcon  width={40} height={40}/>
                        <p className="link" onClick={signIn}>Hello, Sign in</p>
                        </>
                    )                    
    }
    </div>
</div>
<div className="absolute overflow-hidden overflow-y-scroll left-0 right-0 h-screen bg-black opacity-70 z-40"
 style={{visibility: transparency}}>
<Sidebar />
</div>

            </div>



            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 "> 
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    width={150} height={40} objectFit='contain' onClick={()=> router.push('/')}
                    className="cursor-pointer" />
                </div>
                {/* Search bar */}
                <div className="hidden sm:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500"> 
                    <input type="text" className="p-2 h-full w-6 flex-grow  flex-shrink rounded-l-md focus:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Right hand side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                {session ? (
                        <Image src={session.user.image} loading="lazy" objectFit="contain" width={40} height={40}
                        className="cursor-pointer br-50" />
                    ): (<p onClick={signIn} className="text-md lg:hidden">Sign In</p>)}
                    <div className=" link hidden lg:block" onClick={!session ? signIn : signOut}>
                        <p>
                            {
                                session ? `Hello, ${session.user.name}` : 'Sign In'
                            }
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className=" link hidden lg:block">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={()=> router.push('/checkout')}
                    className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 
                        rounded-full text-center text-black font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm ">Basket</p>
                    </div>
                </div>
            </div>
{/* Bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 text-white bg-amazon_blue-light text-sm text-shadow">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1 shadow-none" onClick={()=>{
                        setTransform('0')
                        setTransparency('visible');
                        document.body.style.overflow = 'hidden';
                    }} />
                    All
                </p>
                <p className="link hidden lg:inline-flex">Prime Video</p>
                <p className="link hidden lg:inline-flex">Amazon Business</p>
                <p className="link hidden lg:inline-flex">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                <p className="link inline-flex font-bold text-animie">
                    <a href="https://sanky-flix-50d72.web.app/" target="_blank">Netflix</a></p> 

                    {session && (
                        <button className="sign-out" title="Scroll to Top" onClick={signOut}>Sign Out</button>
                    )}
            </div>
        </header>
    )
}

export default Header
