import { RiReactjsLine, RiNextjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
const Technoligies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400 " />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-blue-200" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-blue-700" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNextjsLine className="text-7xl text-purple-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-red-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFirebaseFill className="text-7xl text-green-400" />
                </div>
            </div>
        </div>
    )
}

export default Technoligies