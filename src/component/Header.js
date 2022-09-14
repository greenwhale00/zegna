

const NAVLINK = [
    { id: 1, menu: "Oasi Cashmere 컬렉션", link: '/' },
    { id: 2, menu: "신제품", link: '/' },
    { id: 3, menu: "레디 투 웨어", link: '/' },
    { id: 4, menu: "제냐의 세계", link: '/' },
]


const Header = () => {
    return (
        <header className='Header'>
            <div className="hd_wrap">
                <nav className='Gnb'>
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menu}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <h1><a href="/"><img src={process.env.PUBLIC_URL + "/assets/Logo_Zegna.png"} alt="제냐" /></a></h1>
                <div className="icon">
                    <i className='xi-search'></i>
                </div>
            </div>
        </header>
    )
}


export default Header;



