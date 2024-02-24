import profilewithoutBackground from '/assets/profile/profile_without_background.png'
import usePagesStateHook from '../../hooks/usePagesStateHook'



import '../../styles/profilePhoto.css'

export const ProfilePhoto = () => {

    const { state } = usePagesStateHook();

    return (
        <div className={`photo__container`}>
            <div className={`photo__layout ${state.isAboutPageActive && 'photo__layout-active'} `}>
                <img
                    src={profilewithoutBackground}
                    alt="profile photo"
                    width='180px' height='200px'
                    className='bg-[#151E21] rounded-xl'
                />
            </div>
        </div>
    )
}

