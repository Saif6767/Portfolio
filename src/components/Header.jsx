import React from 'react'
//images
import Logo from '../../public/logo1.svg'

function Header() {
    return (
        <>
            <header className='py-8'>
                <div className="container mx-auto">
                    <div className='flex justify-between items-center'>
                        {/* logo */}
                        <a href="#">
                        <img src={Logo} alt="" style={{ width: '120px', height: 'auto' }} />
                        </a>
                        {/* button */}
                        <button
                        className='btn btn-sm'
                        onClick={() => {
                            setTimeout(() => {
                                const contactSection = document.getElementById('work');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, 100);
                        }}
                        >My work
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
