import React from 'react';
import '../style/Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div className='container'>
                    <div className='nav_content'>
                        <ul className='nav_ul'>
                            <li className='nav_li'><a href='#main' className='nav_a'>Главная</a></li>
                            <li className='nav_li'><a href='#services' className='nav_a'>Оклейка автомобилей</a></li>
                            <li className='nav_li'><a href='#services' className='nav_a'>Детейлинг автомобилей</a></li>
                            <li className='nav_li'><a href='#' className='nav_a'>Галерея работ</a></li>
                        </ul>
                    </div>

                    <div className='nav_burger'>
                        <span className='nav_burger_line' />
                        <span className='nav_burger_line nav_burger_left_line' />
                        <span className='nav_burger_line' />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
