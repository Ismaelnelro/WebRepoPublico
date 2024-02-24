import { useState } from 'react';

/*Icons React*/
import { BsUiRadiosGrid } from 'react-icons/bs';

/*UI*/
import ListLinks from './ListLinks';

/*Styles*/
import '../../styles/navbar_animation.css';

const LinkNav: string[] = ["home", "about", "skills", "portfolio"];

export const NavbarDesktop = () => {

    const [isMenuActive, setisMenuActive] = useState<boolean>(false);

    return (
        <div className={`navbar hidden z-[99999]   md:w-[140px]  md:h-full  md:absolute md:top-0  md:right-0  md:flex md:flex-col md:justify-around  md:items-end  overflow-hidden  dark:text-stone-200  z-[1]`}>
            <ul>
                {LinkNav.map((link, index) => (<ListLinks link={link} key={index} isMenuActive={isMenuActive} setisMenuActive={setisMenuActive} />))}
            </ul>
            <p className='px-2 w-fit h-fit absolute bottom-4 right-2 self-end justify-self-end cursor-pointer dark:bg-[#151E21] bg-stone-200 py-1 rounded-lg'
                onClick={() => setisMenuActive(!isMenuActive)}>
                <BsUiRadiosGrid size={25} />
            </p>
        </div>
    );
};




