import { TypeAnimation } from 'react-type-animation';

const SkillText = () => {
    return (
        <div>
            {/* <h1 className='text-[35px] md:text-[50px] font-bold'>HI, I'M</h1> */}
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Programmer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Developer',
                    1000,
                    'Full-stack Developer',
                    1000,
                ]}
                speed={50}
                className='text-[2rem] md:text-[2.8rem] text-[#006A9F] font-bold uppercase'
                repeat={Infinity}
            />
        </div>
    );
};

export default SkillText;