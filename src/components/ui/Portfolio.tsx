/*React Icons*/
import { GrGithub } from "react-icons/gr"
import { IoMdRocket } from "react-icons/io"

/*Hooks*/
import usePagesStateHook from "../../hooks/usePagesStateHook"


interface IProject {
    name: string;
    description: string;
    tech?: string;
    img: string;
    github?: string;
    deploy: string;
}


const PROYECTS: IProject[] = [
    {
        name: "Proyecto1",
        description: "Html, Tailwind, React, Typescript, NodeJS, MongoDB ",
        img: "proyectoDemo.jpg",
        github: "https://github.com/Ismaelnelro/WebRepoPublico",
        deploy: "https://github.com/Ismaelnelro/WebRepoPublico"
    }
    ,
    {
        name: "Proyecto2",
        description: "HTML, CSS, JS, MYSQL, JAVA",
        img: "proyectoDemo.jpg",
        github: "https://github.com/Ismaelnelro/WebRepoPublico",
        deploy: "https://github.com/Ismaelnelro/WebRepoPublico"
    },
    {
        name: "Proyecto3",
        description: "HTML, CSS, Tailwdind, REACT, Typescript",
        img: "proyectoDemo.jpg",
        github: "https://github.com/Ismaelnelro/WebRepoPublico",
        deploy: "https://github.com/Ismaelnelro/WebRepoPublico"
    },
    {
        name: "Proyecto4",
        description: "HTML, CSS, REACT, JSON-SERVER",
        img: "proyectoDemo.jpg",
        github: "https://github.com/Ismaelnelro/WebRepoPublico",
        deploy: "https://github.com/Ismaelnelro/WebRepoPublico"
    }
    ,
    {
        name: "Proyecto5",
        description: "HTML, CSSS, JS, MYSQL, JAVA",
        img: "proyectoDemo.jpg",
        github: "https://github.com/Ismaelnelro/WebRepoPublico",
        deploy: "https://github.com/Ismaelnelro/WebRepoPublico"
    }
    ,
    {
        name: "Proyecto6",
        description: "HTML, CSSS, JS, MYSQL, JAVA",
        img: "proyectoDemo.jpg",
        github: "https://github.com/Ismaelnelro/WebRepoPublico",
        deploy: "https://github.com/Ismaelnelro/WebRepoPublico"
    }
]

import '../../styles/portfolio.css'

export const Portfolio = () => {

    const { state } = usePagesStateHook();
    return (
        <section className={`portfolio__container`}>
            <div className={` portfolio__layout ${state.isPortfolioPageActive && "portfolio__layout-active"}`} >

                {PROYECTS.map((proyect, i) => (
                    <div key={i}>
                        <Card proyect={proyect} />
                    </div>
                ))
                }
            </div>
        </section >
    )
}



const Card = ({ proyect }: { proyect: IProject }) => {
    return (
        <>
            <div className="card__container ">
                <h1 className={`card__title  `}>{proyect.name}</h1>
                <p className={`card__description`}>{proyect.description}<br />{proyect.tech}</p>
                <img className=' card__img ' src={`/assets/proyects/${proyect.img}`} alt="profile photo" width='300px' height='250px' />
            </div>
            <div className=" card__link text-stone-200  bg-[#3e3e3e] dark:bg-transparent">
                <a className="card__link-item animate-pulse " href={proyect.github} target="_blank">
                    <GrGithub size={19} />
                    Github
                </a>
                <a className="card__link-item animate-pulse hover:text-[#84b4ac]" href={proyect.deploy} target=" _blank">
                    <IoMdRocket size={19} />
                    Deploy
                </a>
            </div>
        </>
    )
}