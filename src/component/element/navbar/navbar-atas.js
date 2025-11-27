import Link from "next/link";
import {FiFacebook, FiInstagram, FiMessageCircle, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function NavbarAtas(){
    return(
        <nav className="w-full text-gray-50 bg-green-800 top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div>
                    +62 812 3456 7890
                </div>
                <div><Link href={"mailto:jundierlangga@gmail.com"}>Mahasiswa@mail.com</Link></div>
                <div>Follow us and get a chance to win 80% off</div>
                <div className="px-4 flex justify-between items-center space-x-2.5">
                    <p>Follow Us</p>
                    <div className="cursor-pointer"><FiInstagram></FiInstagram></div>
                    <div className="cursor-pointer"><FiYoutube></FiYoutube></div>
                    <div className="cursor-pointer"><FiFacebook></FiFacebook></div>
                    <div className="cursor-pointer"><FiTwitter></FiTwitter></div>

                </div>

            </div>
        </nav>
    )
}