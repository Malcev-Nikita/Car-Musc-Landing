import React from 'react';
import '../style/Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div className='container'>
                    <div className='nav_content'>
                        <ul className='nav_ul'>
                            <li className='nav_li'><a href='#'>Главная</a></li>
                            <li className='nav_li'><a href='#'>Оклейка автомобилей</a></li>
                            <li className='nav_li'><a href='#'>Детейлинг автомобилей</a></li>
                            <li className='nav_li'><a href='#'>Галерея работ</a></li>
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
