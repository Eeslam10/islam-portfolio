// import { HERO_CONTENT } from "../constants"
import Logo from '../assets/islam.jpg'

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pd-16 text-6xl font-sans tracking-tight lg:mt-16 lg:text-8xl">Islam Sani</h1>
                        <span className=" mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Frontend Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                           I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like Javascript, React and Next.js, as well as a bit of back-end technologies like Firebase. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center">
                    <img className='h-120 w-80 rounded-2xl' src={Logo} alt="" />
                </div>
                </div>
            </div>

        </div>
    )
}

export default Hero