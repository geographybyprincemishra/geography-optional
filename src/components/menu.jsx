const MenuLinks = [
    {
        link: 'Offerings',
        subLinks: [
            {
                value: 'Foundation', url: '' 
            },
            {
                value: 'QnA', url: '' 
            },
            {
                value: 'Test Series', url: '' 
            },
            {
                value: 'Live Events', url: '' 
            }
        ]
    },
    {
        link: 'Resources',
        subLinks: [
            {
                value: 'Syllabus', url: '' 
            },
            {
                value: 'Previous Year Papers', url: '' 
            },
            {
                value: 'Current Affairs', url: '' 
            },
            {
                value: 'Notes', url: '' 
            },
            {
                value: 'Blogs', url: '' 
            },
            {
                value: 'Videos', url: '' 
            },
            {
                value: 'About UPSC CSE', url: '' 
            }
        ]
    },
    {
        link: 'Open Assesments',
        subLinks: [
            {
                value: 'Prelims', url: '' 
            },
            {
                value: 'Mains', url: '' 
            },
        ]
    },
    {
        link: 'Help',
        subLinks: [
            {
                value: 'Contact Us', url: '' 
            }
        ]
    }
]

const Menu = () => {
    return <div className="Menu">
        {MenuLinks.map(menu => (
                <div className='dropdown'>
                    <button class="dropbtn">{menu.link}</button>
                    <span className="rotateOnHover">
                        <i class="fa-solid fa-chevron-down blueColored"></i>
                    </span>
                    <div class="dropdown-content">
                        {menu.subLinks.map(sublink => (<a href="/foundation">{sublink.value}</a>))}
                    </div>
                </div>
                )
            )
        }
    </div>
}

export default Menu;