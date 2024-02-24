import { useLocation } from "react-router-dom";
import usePagesStateHook from "../../hooks/usePagesStateHook";

const ListLinks = ({ link, isMenuActive, setisMenuActive }: { link: string; isMenuActive: boolean; setisMenuActive: (isActive: boolean) => void }) => {

    const location = useLocation();
    const { startNewStateOnPage } = usePagesStateHook();

    return (
        <li className={`hover:underline hover:underline-offset-8  ${isMenuActive ? "li-active" : "li bg-[#84b4ac]"} 
                    ${(location.hash.slice(1) === link) ? "underline underline-offset-8 dark:text-[#84b4ac] " : ""}`}
        >
            <a href={`#${link}`} className=' hover:text-[#71baae]'

                onClick={
                    () => {
                        startNewStateOnPage(`SET_${link.toUpperCase()}_ACTIVE`)
                        setisMenuActive(!isMenuActive)
                    }
                }
            >
                {link}
            </a>
        </li>
    )
}

export default ListLinks;