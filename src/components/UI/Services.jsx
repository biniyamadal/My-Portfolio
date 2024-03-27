import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'


const Services = () => {
  return (
   <section id='services'>
    <div className="container lg:pt-5">
        <div className="text-center">
            <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                What do I help
            </h2>
            <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[18px] leading-7" 
            style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
    I contribute to the creation and maintenance of websites and web applications.
    My role involves coding, designing, and implementing features to meet client or organizational requirements.
    Additionally, I ensure that websites are functional, visually appealing, 
    and user-friendly by incorporating best practices in web development, 
    such as responsive design, accessibility, and performance optimization. 
    Leveraging my expertise, I play a crucial role in realizing their objectives through innovative digital solutions.
</p>

        </div>
        <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                    {/* =======vertical line running through the middle====== */}
                    <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
                    {/* ==========left card======== */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div data-aos='fade-right'
                                         data-aos-duration='1200'
                                    className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-xl'>
                                            Frontend Development
                                            </h3>
                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7"
                                         style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        As a frontend developer, I'm skilled in HTML, CSS, and JavaScript, and proficient in frameworks like React.js, 
                                        Tailwind CSS, and Bootstrap. With a focus on clean, efficient code and a passion for visually stunning and intuitive user interfaces.
                                         Committed to staying updated on the latest frontend technologies,
                                         I ensure that the websites and applications I create are both aesthetically pleasing and highly functional.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center">
                                <figure>
                                    <img src={frontendImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                     {/* ==========right card======= */}
                     <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div data-aos='fade-left'
                                         data-aos-delay='50'
                                         data-aos-duration='1300'
                                    className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-xl'>
                                            Backend Development 
                                            </h3>
                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7"
                                        style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                       As a backend developer, I build robust web applications with Node.js and Express, skilled in managing both SQL (MySQL) and NoSQL (MongoDB) databases.
                                        I prioritize efficiency to ensure seamless user experiences, whether through designing RESTful APIs, authentication implementation, or optimizing database queries.
                                        I'm dedicated to delivering tailored, reliable, and high-performing solutions for each project's requirements.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center">
                                <figure>
                                    <img src={backendImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* ==========left card======== */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div data-aos='fade-right'
                                         data-aos-delay='100'
                                         data-aos-duration='1400'
                                    className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-xl'>
                                            UI/UX Design
                                            </h3>
                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7"
                                         style={{ textAlign: 'justify', textJustify: 'inter-word' }} >
                                         As a web developer with a focus on UI/UX, I combine technical expertise with design proficiency to craft compelling digital experiences. 
                                         I guarantee smooth performance across various platforms. Utilizing my insight into user behavior, I design intuitive interfaces to enhance user engagement.
                                         Whether refining designs or analyzing user feedback, I prioritize both aesthetics and functionality to achieve meaningful outcomes.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center">
                                <figure>
                                    <img src={uiImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>

                     {/* ==========right card======= */}
                     {/* <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div data-aos='fade-left'
                                         data-aos-duration='1500'
                                    className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                        <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-xl'>
                                            Apps Development 
                                            </h3>
                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat, 
                                            doloremque eaque porro pariatur et sed excepturi illo, possimus quos natus 
                                            rem laborum, vel perferendis omnis sapiente? Ut,
                                             cumque deserunt.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center">
                                <figure>
                                    <img src={appsImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>

        </div>

    </div>

   </section>
  )
}

export default Services;