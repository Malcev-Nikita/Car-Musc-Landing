import React from 'react';
import '../style/Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header_opacity'></div>

                <div className='container'>
                    <h1 className='header_h1'>CAR MUSC</h1>    

                    <div className='header_dots'>
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className='header_descr'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.
                        </p>
                    </div>

                    <button className='header_button'>
                        <span className='header_button_background'></span>
                        <span 
                            className='header_button_text' 
                            onMouseEnter={() => document.getElementsByClassName('header_button_background')[0].classList.add('header_button_background_active')}
                            onMouseLeave={() => document.getElementsByClassName('header_button_background')[0].classList.remove('header_button_background_active')}
                        >
                            Наши услуги
                        </span>
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;
