/*Ract Icons*/
import { GrReactjs } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { BiLogoCss3, BiLogoHtml5, BiLogoJava, BiLogoJavascript } from 'react-icons/bi';

/*Hooks*/
import usePagesStateHook from '../../hooks/usePagesStateHook';

/*Styles*/
import '../../styles/skills.css'

interface ISkills {
    icon: JSX.Element;
    name: string;
}

const SKILLS: ISkills[] = [
    {
        icon: <BiLogoHtml5 size={28} />,
        name: "HTML",
    },
    {
        icon: <BiLogoCss3 size={28} />,
        name: "CSS"
    },
    {
        icon: <BiLogoJavascript size={28} />,
        name: "JAVASCRIPT"
    },
    {
        icon: <GrReactjs size={28} />,
        name: "REACT"
    }, {
        icon: <SiTypescript size={28} />,
        name: "TYPESCRIPT"
    },
    {
        icon: <SiMongodb size={28} />,
        name: "MONGODB"
    },
    {
        icon: <SiExpress size={28} />,
        name: "EXPRESS"
    },
    {
        icon: <IoLogoNodejs size={28} />,
        name: "NODEJS"
    }
    ,
    {
        icon: <SiTailwindcss size={28} />,
        name: "TAILWINDCSS"
    }
    ,
    {
        icon: <BiLogoJava size={28} />,
        name: "JAVA"
    }
    ,
    {
        icon: <SiMysql size={28} />,
        name: "MYSQL"
    }

];


export const Skills = () => {

    const { state } = usePagesStateHook();


    return (
        <section className={`skills__container`}>
            <div className={`skills__layout ${state.isSkillsPageActive && 'skills__layout-active'}`}>
                {SKILLS.map(({ icon, name }, i) => (
                    <Card icon={icon} name={name} key={i} />
                ))}
            </div>
        </section>
    )
}


const Card = ({ icon, name }: ISkills) => {
    return (
        <div className="card lg:w-48 w-32 h-14 bg-[#151E21] cursor-pointer 
         dark:bg-stone-200 z-50 hover:scale-110 transition-all duration-300">
            <p className='text-[#84b4ac] dark:text-[#151E21]'>
                {icon}
            </p>
            <p className='text-[#84b4ac] dark:text-[#151E21]'>{name}</p>
        </div>
    )
}
