import { ProfilePhoto } from '.';
import usePagesStateHook from '../../hooks/usePagesStateHook';

import '../../styles/aboutme.css'

export const AboutMe = () => {

    const { state } = usePagesStateHook();


    return (
        <article className='aboutme__container'>
            <ProfilePhoto />
            <div className={`aboutme__layout ${state.isAboutPageActive && 'aboutme__layout-active'}`}>
                <p className={` aboutme__description  dark:text-stone-200 `}>
                    <span>
                        <b className="about__description-name">
                            Hi! I'm T. Roma Smith
                        </b>,
                        My colege call me T.R.
                        Passionate frontend developer with a knack for crafting engaging and functional web interfaces for innovative and exciting applications.
                    </span>
                    <b className=' about__description-sign'>
                        I LOVE CODE & LEARN
                    </b>
                </p>
            </div>
        </article>
    );
};

