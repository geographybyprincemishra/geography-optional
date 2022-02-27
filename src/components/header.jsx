const Header = () => {
    return <div className="HeaderNav">
        <div className="icons">
            <span>
                <a href="/">
                    <i class="fa-solid fa-house-chimney fa-xl"></i>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://www.linkedin.com/in/prince-mishra-4a086822b/">
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://t.me/PrinceGeog">
                    <i class="fa-brands fa-telegram fa-xl"></i>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://wa.me/918851787850">
                    <i class="fa-brands fa-whatsapp fa-xl"></i>
                </a>
            </span>
            <span>
                <i class="fa-solid fa-mobile-screen-button fa-xl"></i>
            </span>
            <span>
                +91 8851787850
            </span>
        </div>

        <div className="Marquee">
            <marquee width="500px" direction="left" height="50px">
                Daily Update : We're Emerging. Stay Tuned !!
            </marquee>
        </div>

        <div className="actions">
            <a>
                Login / Register
            </a>
        </div>
    </div>
}

export default Header;