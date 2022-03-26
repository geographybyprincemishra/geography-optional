const MenuLinks = [
    {
        link: 'Offerings',
        subLinks: [
            {
                value: 'Foundation', url: '/foundation' 
            },
            // {
            //     value: 'QnA', url: '' 
            // },
            // {
            //     value: 'Test Series', url: '' 
            // },
            // {
            //     value: 'Live Events', url: '' 
            // }
        ]
    },
    {
        link: 'Resources',
        subLinks: [
            {
                value: 'Prelims Syllabus', url: '/syllabus' 
            },
            {
                value: 'Optional Syllabus', url: '/optionalsyllabus' 
            },
            {
                value: 'Previous Year Papers', url: '/pyp' 
            },
            // {
            //     value: 'Current Affairs', url: '' 
            // },
            // {
            //     value: 'Notes', url: '' 
            // },
            {
                value: 'Blogs', url: '/blog' 
            },
            // {
            //     value: 'Videos', url: '' 
            // },
            // {
            //     value: 'About UPSC CSE', url: '/aboutupsc' 
            // }
        ]
    },
    // {
    //     link: 'Open Assesments',
    //     subLinks: [
    //         {
    //             value: 'Prelims', url: '' 
    //         },
    //         {
    //             value: 'Mains', url: '' 
    //         },
    //     ]
    // },
    {
        link: 'Help',
        subLinks: [
            {
                value: 'Contact Us', url: 'contactus' 
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
                       {menu.subLinks.map(sublink => (<a href={sublink.url}>{sublink.value}</a>))}
                        
                    </div>
                    
                </div>
                )
            )
        }
    </div>
}

export default Menu;