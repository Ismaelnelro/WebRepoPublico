import { useEffect, useRef } from 'react';

/*Component - ui*/
import { NavbarMovile } from '../../components/ui/NavbarMobile';

/*Styles*/
import './layout.css'

const Layout = ({ children }: { children: React.ReactNode }) => {

    const bottomRef = useRef<any>(null)

    useEffect(() => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <main className={`layout__main`}>
            <span className={`layout__main-background`}></span>
            <div className={`layout__container`}>
                <section className={`layout__card dark:bg-[#151E21]`}>
                    {children}
                </section>
            </div>
            <NavbarMovile />
            {/*Esta referencia es para que al hacer reload se dirija los mas cercano a la navbar*/}
            <span ref={bottomRef}></span>
        </main>
    )
}

export default Layout