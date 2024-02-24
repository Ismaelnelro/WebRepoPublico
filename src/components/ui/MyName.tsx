import usePagesStateHook from '../../hooks/usePagesStateHook';
import '../../styles/name.css'
export const MyName = () => {

    const { state } = usePagesStateHook();

    return (
        <div className={`name__container  dark:text-stone-100
        ${state.isHomePageActive ? "opacity-700  z-[9999]" : "opacity-0"}
        `}>
            {/* // ${state.isContactPageActive ? " translate-x-[-25%] lg:flex  hidden " : "justify-center"} */}
            <div className='w-fit'>
                <p className={`name__primario `}>I'm</p>
                <p className={`name__secundario  
                dark:bg-stone-100 dark:text-[#151E21]  
                dark:border-t-2 
                dark:border-b-2 
                dark:border-stone-200 `}>L.Roma</p>
                <p className={`name__tercero `}>Smith</p>
            </div>
        </div >
    )
}
