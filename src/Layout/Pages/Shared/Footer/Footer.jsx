import logo from "../../../../assets/logo/logo.png"
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer mx-auto p-10 bg-zinc-950 text-white ">
  <aside>
    <img className="h-24" src={logo} alt="" />
    <p><span className='text-5xl font-bold'>E</span> <span className='text-amber-700 font-[etalic] text-5xl'>M</span><span className='font-bold text-5xl'>ars</span></p>
    <p>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="font-bold text-xl text-amber-700">Customer Care</header> 
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">How to Buy</a>
    <a className="link link-hover">Return & Refunds</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">CCMS- Central Company management</a>
    <a className="link link-hover">Systems</a>
  </nav> 
  <nav>
  <header className="font-bold text-xl text-amber-700">EMars</header> 
    <a className="link link-hover">About EMars</a>
    <a className="link link-hover">EMars Card</a>
    <a className="link link-hover">EMars Blog</a>
    <a className="link link-hover">EMars Cares</a>
    <a className="link link-hover">EMars Mart</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">EMars App</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl text-amber-700">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
    <header className="font-bold text-xl text-amber-700">Payment Method</header> 
    <a className="link link-hover"></a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl text-amber-700">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
    <header className="font-bold text-xl  text-amber-700 mb-5 mt-7">Find Us</header> 
   <div className="flex justify-center  gap-4 items-center">
   <a className="link link-hover rounded-2xl md:-ml-10 text-xl p-2  bg-white text-amber-700"><FaFacebookF></FaFacebookF></a>
    <a className="link link-hover rounded-2xl text-xl p-2 bg-white text-amber-700"><FaTwitter></FaTwitter></a>
    <a className="link link-hover rounded-2xl text-xl p-2 bg-white text-amber-700"><FaInstagram></FaInstagram></a>
    <a className="link link-hover rounded-2xl text-xl p-2 bg-white text-amber-700"><FaLinkedinIn></FaLinkedinIn></a>
   </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;