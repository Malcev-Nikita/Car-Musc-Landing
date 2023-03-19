import React from 'react';
import '../style/Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <p className='footer_desc'>
                        2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
                    </p>

                    <ul className='footer_nav'>
                        <li className='footer_li'><a href='#main' className='footer_a'>Главная</a></li>
                        <li className='footer_li'><a href='#services' className='footer_a'>Оклейка автомобилей</a></li>
                        <li className='footer_li'><a href='#services' className='footer_a'>Детейлинг автомобилей</a></li>
                        <li className='footer_li'><a href='#our_work' className='footer_a'>Галерея работ</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;
