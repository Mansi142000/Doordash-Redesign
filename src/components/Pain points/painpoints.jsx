import './painpoints.css';
import painImg from '../../assets/images/pain points.svg';

export default function Desc() {
    return (
        <div className="painpoints">
            <div className="heading">
                <h1>Pain points</h1>
            </div>
            <div className="content">
                <p>Based on the insights gathered from interviews and research, several pain points have been identified. Addressing these issues has the potential to enhance the overall user experience.</p>
            </div>
            <div className="pain">
                <img src={painImg} alt="Pain Points" />
            </div>
        </div>
    );
}
