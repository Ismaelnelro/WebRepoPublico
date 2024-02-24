import { Link } from 'react-router-dom'

/*React icons*/
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'

/*Styles*/
import '../../styles/network.css'

const NETWORK = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ismaelrosas",
    icon: <FiLinkedin size={19} />
  },
  {
    name: "Github",
    href: "https://github.com/Ismaelnelro",
    icon: < FiGithub size={19} />
  }

]

export const Network = () => {

  return (
    <div className={`network__container dark:bg-[#151E21] bg-stone-200`}>

      {
        NETWORK.map((network, index) => (
          <a key={index} className={`network dark:text-stone-200`}
            href={network.href} target={network.href !== 'contact' ? '_blank' : '_parent'}>
            {network.icon}
            {network.name}
          </a>
        ))
      }

      < Link className=' relative dark:text-stone-200 text-[#151E21] flex gap-1 items-center hover:underline'
        to='/contact'
      >
        <  MdOutlineEmail size={24} />
      </Link>


    </div>
  )
}


