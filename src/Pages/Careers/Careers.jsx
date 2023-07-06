import { useState } from 'react'
import './Careers.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import carrersimg from '../../assets/focus.jpg'
import career1 from '../../assets/career1.jpg'
import career2 from '../../assets/career2.jpg'
import ToggleButton from '../../Components/ToggleButton/ToggleButton'
import ApplicationModal from '../../Components/ApplicationModal/ApplicationModal'


const Careers = () => {
    const [openApplication, setOpenApplication] = useState(false)

    const applicationOpen = () => {
        setOpenApplication(!openApplication)
    }

  return (
    <div id='careers'>
        <Navbar />

        <div id="career-hero">
            <img src={carrersimg} alt="" />
            <h1>CAREERS</h1>
        </div>

        <div id="career-container">
            <div className="top">
                <aside>
                    <h1>CAREER DEVELOPMENT</h1>
                    <p>
                        Avvic Group leads an integrated subsidiary system that provides collaborative synergies to drive value creation. Avvic provides unique opportunities for creativity, career growth, and development in specific skill sets. The carefully crafted training and capacity development programs provide an exciting, structured career path. This engenders comprehensive personal and professional development for all-around growth and development.
                        The organization continuously demonstrates a commitment to nurturing and retaining a creative, innovative, and value-driven environment that motivates individuals and teams for high performance. The Avvic team extends you a warm welcome if you are:
                    </p>

                    <br />

                    <ul>
                        <li>An out-of-the-box thinking, creative individual.</li>
                        <li>A problem solver with great analytical skills.</li>
                        <li>Motivated, focused, and self-driven.</li>
                        <li>A team player with a good attitude.</li>
                    </ul>

                    <br />

                    We seek prospective team members with these qualities, creative individuals with aspirations that are in sync with the Group’s vision.
                </aside>

                <img src={career1} alt="" />
            </div>

            <div className="bottom">
                <article>
                    <h1>CONTINUING TEAM DEVELOPMENT</h1>
                    <p>
                        Avvic Group places priority on building a value-driven team of talented, creative individuals who share the organisation’s ideals and are motivated to achieve our strategic objectives. The Group’s functional development process ensures a work environment that fosters creativity, consistent development, and expansion of the spheres of profitable opportunities.
                    </p>
                </article>
                <aside>
                    <img src={career2} alt="" />

                    <div id="text">
                        <>
                            <h1>Our Processes</h1>
                            <p>
                                The Group’s training process integrates in-house mentorship and function-specific training to develop the combined skill set required for a high-performance team. This integrates new team members with the entire team and stimulates consistent performance.
                            </p>
                        </>
                        <br />
                        <>
                            <h1>Work Ethics</h1>
                            <p>
                                Avvic Group is committed to strong work ethics. The Group places a premium on time-tested values of focus, integrity, hard work and diligence. This forms the pivotal structure of the Group’s work culture and organisational policies. Work-life balance is integral to the Group’s philosophy of consistent performance. We place utmost importance on the health and well-being of our team members.
                            </p>
                        </>
                    </div>
                </aside>
            </div>
        </div>

        <div id="career-foots">
            <p>
                If you are confident you have what it takes and would like to join our team, click the button to fill an application
            </p>

            <ToggleButton 
                title={"Apply"}
                className={"toggle"}
                onClick={applicationOpen}
            />
        </div>

        {openApplication && <ApplicationModal closeApplication={applicationOpen} />}

        <Footer />
    </div>
  )
}

export default Careers