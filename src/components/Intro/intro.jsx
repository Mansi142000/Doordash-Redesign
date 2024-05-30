import './intro.css';
import introImg from '../../assets/images/intro.svg';

export default function Intro() {
    return (
      <div className="intro">
        <img src={introImg} alt="Intro Image Here" />
      </div>
    );
}
