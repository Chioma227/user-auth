import React from 'react'
import { Dismiss, Success, Warn } from '../../atoms/svgs/Svg'

const SuccessModal = ({ children }) => {
    return (
        <main role="alert" className="rounded-xl border border-gray-100 absolute bg-white p-4">
            <div className="flex items-start gap-4">
                <span className="text-green-600">
                    <Success />
                </span>

                <div className="flex-1">
                    <strong className="block font-medium text-gray-900"> Changes saved </strong>
                    <p className="mt-1 text-sm text-gray-700">{children}</p>
                </div>
                <button className="text-gray-500 transition hover:text-gray-600">
                    <span className="sr-only">Dismiss popup</span>
                    <Dismiss />
                </button>
            </div>
        </main>
    )
}


const ErrorModal = ({children, onClick}) => {
    return (
       <main className=" absolute bg-opacity-50 backdrop-blur-[2px] z-10 w-[100%] h-screen">
         <section role="alert" className=" top-0 absolute rounded border-s-4 border-red-500 bg-red-50 p-4">
            <div className="flex items-center gap-2 text-red-800">
                <Warn />
                <strong className="block font-medium"> Something went wrong </strong>
            </div>

            <p className="mt-2 text-sm text-red-700">
               {children}
            </p>
            <button onClick={onClick}>close</button>
        </section>
    </main>
    )
}

export { ErrorModal, SuccessModal }
