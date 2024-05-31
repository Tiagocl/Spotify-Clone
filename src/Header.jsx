import { Home, Search, Library } from 'lucide-react';

export default function Header() {
    return (
        <div className="side-container">
            <div className="search-container">
                <a href="" className="header-a">
                    <Home size={27}id="icons"/>
                    Início
                </a>
                <a href="" className='header-a'>
                    <Search size={27} id="icons"/>
                    Procurar
                </a>

            </div>
        </div>
    )
}