import './redesign.css';
import firstPoint from '../../assets/images/solOne.svg';
import secondPoint from '../../assets/images/solTwo.svg';
import thirdPoint from '../../assets/images/solTh.svg';
import fourthPoint from '../../assets/images/solFour.svg';
import fifthPoint from '../../assets/images/solFive.svg';
import thirdProb from '../../assets/images/probThree.svg';

export default function Redesign() {
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Redesign</h1>
            </div>
            <div className='content'>
                <div className='firstOne'>
                    <div className='img'>
                        <img src={firstPoint} alt="Solution One" />
                    </div>
                    <div className='explanOne'>
                        <p><b>Nielsen's heuristics</b> are a set of usability principles that help designers identify usability issues in user interfaces. One of these principles, <b>recognition over recall</b>, emphasizes designing interfaces where users can recognize options easily instead of having to recall information from memory. <b>Replacing a generic arrow with a bright location symbol in a navigation app is beneficial because it immediately conveys its purpose through a universally recognizable icon, reducing cognitive effort and enhancing usability by making the interface more intuitive.</b></p>
                    </div>
                </div>
                <div className='secondOne'>
                    <div className='explanTwo'>
                        <p>Displaying all ratings and enabling <b>filter-based review searches</b> enhances transparency and user trust, allowing for more informed decision-making.<b> This feature personalizes the user experience, making the app more intuitive and engaging by letting users easily find reviews relevant to their needs and encouraging more detailed feedback.</b></p>
                    </div>
                    <div className='img2'>
                        <img src={secondPoint} alt="Solution Two" />
                    </div>
                </div>
                <div className='problemThree'>
                    <img src={thirdProb} alt="Problem Three" />
                </div>
                <div className='thirdOne'>
                    <div className='explanThree'>
                        <p><b>Segmenting the menu into sections</b> and displaying one section at a time streamlines the browsing experience by minimizing cognitive overload and visual clutter, while also providing users with a clear and organized interface.<b>This approach simplifies navigation and ensures scalability for seamless integration of new items, ultimately enhancing user satisfaction and engagement.</b></p>
                    </div>
                    <div className='img3'>
                        <img src={thirdPoint} alt="Solution Three" />
                    </div>
                </div>
                <div className='fourthOne'>
                    <div className='img4'>
                        <img src={fourthPoint} alt="Solution Four" />
                    </div>
                    <div className='explanFour'>
                    <p>Including <b>calorie information on menu items</b> offers several benefits, enhancing customer decision-making and aligning with health-conscious trends. It allows customers to make choices that fit their dietary needs, promotes <b>transparency and trust in the brand</b>, and helps comply with nutritional disclosure regulations. <b>As more consumers seek out nutritional details to guide their eating habits, restaurants providing this information can gain a competitive edge, attracting a loyal, health-focused clientele and boosting overall customer satisfaction.</b></p>
                    </div>
                </div>
                <div className='fifthOne'>
                    <div className='explanFive'>
                    <p>Mentioning <b>portion sizes</b> on the menu significantly enhances the dining experience by setting accurate expectations for customers, aiding in dietary management, and allowing better assessment of value. This transparency helps customers make informed choices, potentially <b>reducing food waste and improving satisfaction</b> by ensuring that the portion received aligns with their expectations. Additionally, it supports inclusivity by helping individuals and groups decide how to best meet their dining needs, whether they are managing specific diets or determining the adequacy of food for sharing.<b>Overall, detailed portion information contributes to a more efficient and enjoyable user experience.</b></p>
                    </div>
                    <div className='img5'>
                        <img src={fifthPoint} alt="Solution Five" />
                    </div>
                </div>
            </div>
        </div>
    );
}
