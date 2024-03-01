import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Element */}
        <a href="/" className="text-cbb26a text-lg font-bold">Home</a>

        {/* Logo */}
        <img src="../src/assets/BurgerGuideLogo2.png" alt="Logo" className="h-10 w-10" />

        {/* About Us Element */}
        <a href="/about" className="text-cbb26a text-lg font-bold">About Us</a>

        {/* BurgerStore Element
        <Link to='/BurgerStores' className='text-cbb26a text-lg font-bold'>
        Burger Stores</Link> */}

        {/* Login Element */}
        <a href="/login" className="text-cbb26a text-lg font-bold">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;