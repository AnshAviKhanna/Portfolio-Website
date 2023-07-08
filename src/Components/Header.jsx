import React, { useState, useEffect } from 'react';

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsNavbarVisible(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-transform duration-300 transform ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Navbar content */}
      <div className='w-12'></div>
    </nav>
  );
}

export default Header;