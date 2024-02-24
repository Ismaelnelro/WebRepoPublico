import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/*Formik - Yup*/
import { useFormik } from 'formik';
import * as Yup from 'yup';


/*Component*/
import { InputComponent } from '../components/ui/InputComponent';
import Loader from '../components/ui/Loader';
import ContactResponce from '../components/ui/ContactResponce';

const ContactPage = () => {

    const navigate = useNavigate();
    const form = useRef<HTMLFormElement>(null);
    const [message, setmessage] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [disable, setDisable] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4).required('Name must be at least 4 characters'),
            email: Yup.string().email().required('Invalid email address'),
            message: Yup.string().min(20).required('Required, Message must be at least 20 characters'),

        }),
        onSubmit: async () => {
            setLoading(true)
            setDisable(true)
            try {
                const currentForm = form.current;

                if (currentForm) {
                    const resp: EmailJSResponseStatus =
                        await emailjs.sendForm(
                            import.meta.env.VITE_SERVICE_ID,
                            import.meta.env.VITE_TEMPLATE_ID,
                            currentForm,
                            { publicKey: import.meta.env.VITE_PUBLIC_KEY })

                    if (resp.status !== 200) throw new Error("UPS! Ocurrio un inconveniente al enviar el mensaje");
                    if (resp.status === 200) {
                        setLoading(false)
                        setmessage(`${resp.text} Mensaje enviado con exito`)
                    }
                }
            } catch (error) {
                setDisable(true)
                setLoading(false)
                setmessage(`${error}`)
            }
        }
    });



    return (
        <>
            {message && <ContactResponce message={message} />}

            <div className='w-full absolute top-0 bg-[#151E21] left-0 flex justify-center items-center landscape:min-h-[600px]' style={{ height: "100vh" }} >
                <div className="w-auto p-4 pb-20 flex flex-col justify-center items-start  bg-white hadow-gray-800 shadow-2xl  text-gray-800  relative rounded-xl ">
                    <form ref={form} onSubmit={formik.handleSubmit} className="w-[18.75rem]">
                        <span className="absolute right-4 top-4 cursor-pointer" onClick={() => navigate('/')}>Home</span>
                        <p className='py-4 font-semibold text-4xl uppercase self-start'> Conctact</p>

                        <InputComponent
                            name='name'
                            id='name'
                            type='text'
                            label='Nombre'
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            touched={formik.touched.name}
                            error={formik.errors.name}
                        />
                        <InputComponent
                            id='email'
                            name='email'
                            type='email'
                            label='Email'
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            touched={formik.touched.email}
                            error={formik.errors.email}
                        />

                        <div className=''>
                            <label className='font-light self-start' htmlFor="message">Mensaje</label>
                            <textarea
                                className='w-[18.75rem] p-4 rounded border-2 border-black'
                                id="message"
                                name="message"
                                value={formik.values.message}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                rows={3}
                            />
                            <div className={`h-6 ${formik.touched.message && formik.errors.message ? "opacity-100 text-red-500 text-xs p-1" : "opacity-0"}`}>{formik.errors.message}</div>
                        </div>

                        <div className={`${loading ? "opacity-100" : "bg-red-200 h-auto opacity-0"}`}>Enviando mensaje .....</div>
                        <button type='submit' disabled={disable} className={`absolute  -bottom-5 px-14 py-3 font-light uppercase text-lg  rounded shadow-gray-800 shadow-2xl
                        ${disable ? "bg-gray-500" : 'bg-[#84b4ac] hover:text-white'}`}
                        >
                            {loading ? <Loader /> : "Enviar"}
                        </button>
                    </form>
                </div>
            </div >
        </>

    )
}

export default ContactPage;


