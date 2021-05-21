import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
function Header() {

const [session] = useSession();
const router = useRouter(); 
// it will obj.
// session.user. 

const items = useSelector(selectItems);

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2"> 
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
                    <div className=" link" onClick={!session ? signIn : signOut}>
                        <p>
                            {
                                session ? `Hello, ${session.user.name}` : 'Sign In'
                            }
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className=" link">
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
            <div className="flex items-center space-x-3 p-2 pl-6 text-white bg-amazon_blue-light text-sm">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                <p className="link inline-flex font-bold">
                    <a href="https://sanky-flix-50d72.web.app/" target="_blank">Netflix</a></p> 

            </div>
        </header>
    )
}

export default Header
