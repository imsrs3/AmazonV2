import { ChevronRightIcon} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
function Sidebar() {
    const [session] = useSession();
    return (
        <div className="text-white mx-5">
            <li>
                <ul>Home</ul>
                <ul>Shop by Category</ul>
                <ul>Today's Deals</ul>
                <hr />
                <ul>Your Account</ul>
                <ul>Your Orders</ul>
                <ul>Buy Again</ul>
                <ul>Your Wish List</ul>
                <ul>Amazon Pay</ul>
                <ul>Prime</ul>
                <ul>Sell on Amazon</ul>
                <ul className="flex ">
                    <span>Program and Features </span>
                    <span className="text-gray"><ChevronRightIcon  height={30} width={30} /></span>
                </ul>
                <ul>Language</ul>
                <ul>Your Notifications</ul>
                <ul className="flex">
                    <span>Settings</span>
                    <span><ChevronRightIcon  height={30} width={30} /></span>
                </ul>
                <ul>Customer Service</ul>
                <ul>{session && (
                        <button className="sign-out w-64 " title="Sign Out" onClick={signOut}>Sign Out</button>
                    )}
                    </ul>
            </li>
            
            
        </div>
    )
}

export default Sidebar
