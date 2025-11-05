import React from 'react'
import { useRef } from 'react'
import './HomeAbout.css'
import CartoonImageHome from '../assets/HomeIMG/CartoonImageHome3.webp'
const HomeAbout = () => {

    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Gradient Position
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

        // 3D Tilt Calculation
        const rotateX = ((y / rect.height) - 0.5) * 10;
        const rotateY = ((x / rect.width) - 0.5) * -10;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
        card.style.setProperty("--width", `0px`);
        card.style.setProperty("--height", `0px`);
    };

    return (
        <div className="relative top-24 flex justify-center items-center mt-5 mb-24 ">
            <div
                ref={cardRef}
                className="Apkcard AppCard bg-white text-black"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                <div className="flex justify-center items-center"><img src={CartoonImageHome} className="Appimg rounded-2xl " /></div>

                <div className="w-[30%] containttext">
                    <h1 className="text-2xl font-bold AppH">A Few Words About IQGalaxy</h1>
                    <p className="Apkp mt-5 opacity-90">IQGalaxy is more than just a learning platform - it's a magical space where Artificial Intelligence meets playful education. We help kids explore, learn, and grow with curiosity and confidence.
                    </p>
                    <h1 className="text-2xl mt-3 font-bold text-[#ffc107]">Bullet Points</h1>
                    <p className='Apkp mt-5 opacity-90'>✔ Personalized lessons powered by AI</p>

                     <p className='Apkp mt-5 opacity-90'>✔ Fun games & activities that make learning exciting</p>

                     <p className='Apkp mt-5 opacity-90'>✔ Safe, secure, and kid-friendly environment</p>

                    <div className='Appknowbtn  rounded-3xl p-1.5 mt-8'> <button className=' p-1.5 rounded-2xl w-[120px] cursor-pointer'>Know More</button></div>
                </div >


            </div>
        </div>
    );
};

export default HomeAbout
