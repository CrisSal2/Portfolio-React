import profilePic from '../../assets/images/Custom-PC.jpg'
import './home.css'

function Home() {
    return(
        <div className='homeDiv'>
        <div id="Profile_Picture">
            <img src={profilePic} alt="Profile Picture" />
        </div>
        <div className="section_text">
            <h1>Full-Stack Dev 💻</h1>
            <p className="intro_text">
                Hello, I'm Christian Salgado! I'm a full-stack developer based in Orange, CA 📍
            </p>
        </div>
        </div>
    )
}

export default Home;