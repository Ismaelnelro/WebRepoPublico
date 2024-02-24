import { Link } from 'react-router-dom'

const ContactResponce = ({ message }: { message: string }) => {
    return (
        <div className='absolute top-0 left-0 w-full h-screen flex flex-wrap  justify-center items-center bg-black  z-[999]'>
            <span className='absolute top-0 left-0 w-full h-screen bg-white opacity-50 z-[999]'></span>
            <div className='bg-[#151E21] p-5 h-auto text-white font-bold z-[9999] text-center flex flex-col gap-2'>
                <h1 className='bg-[#151E21] p-5 h-auto text-white font-bold z-[9999] text-center min-w-[18.75rem]'> {message}</h1>
                <Link className='border-2  p-4 cursor-pointer' to={"/"}>Home</Link>
            </div>
        </div>
    )
}

export default ContactResponce