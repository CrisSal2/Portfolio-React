import React from "react"
import profilePic from '../../assets/images/Custom-PC.jpg'

function Home() {
    return(
        <div>
        <div id="Profile_Picture">
            <img src={profilePic} alt="Profile Picture" />
        </div>
        <div class="section_text">
            <h1>Full-Stack Dev 💻</h1>
            <p class="intro_text">
                Hello, I'm Christian Salgado! I'm a full-stack developer based in Orange, CA 📍
            </p>
        </div>
        </div>
    )
}

export default Home;