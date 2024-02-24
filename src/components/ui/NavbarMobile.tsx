import { useState } from 'react';

/*React Icons*/
import { RxHamburgerMenu } from 'react-icons/rx';
import usePagesStateHook from '../../hooks/usePagesStateHook';

/*Styles*/
import '../../styles/navbarmobile.css'
import { useLocation } from 'react-router-dom';

const LinkNav: string[] = ["home", "about", "skills", "portfolio"];


export const NavbarMovile = () => {
    // const bottomRef = useRef<any>(null)
    const [showMenu, setShowMenu] = useState(false);
    const [isMenuActive, setisMenuActive] = useState(false);


    const location = useLocation();
    const { startNewStateOnPage } = usePagesStateHook();


    // useEffect(() => {
    //         bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    // }, [])


    return (
        <div className={` navbarmobile__container  md:hidden`}>

            <div className='relative navbarmobile__header '>
                <span onClick={() => setisMenuActive(!isMenuActive)}
                    className='hover:text-[#84b4ac]'>
                    <RxHamburgerMenu size={26} />
                </span>
            </div>

            <ul className={`navbarmobile__body relative ${isMenuActive && "navbarmobile__body-active"}`}>
                {LinkNav.map((link, index) => (
                    <li key={index} className={` navbarmobile__body__link ${isMenuActive && "navbarmobile__body__link-active"}`}>
                        <a href={`#${link}`}
                            className={`${(location.hash.slice(1) === link) && "text-[#84b4ac]"}`}
                            onClick={() => {
                                startNewStateOnPage(`SET_${link.toUpperCase()}_ACTIVE`)
                                setShowMenu(!showMenu);
                            }}
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    );
};

