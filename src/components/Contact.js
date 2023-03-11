import React from 'react';
import '../style/Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <section className='contact'>
                <div className='contact_block'>
                    <h3 className='contact_block_header'>Адрес:</h3>
                    <p className='contact_block_descr'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                    </p>
                </div>

                <div className='contact_block'>
                    <h3 className='contact_block_header'>Телефон:</h3>
                    <p className='contact_block_descr'>
                        8 (812) 123-45-67
                        <br/>
                        8-911-123-45-67
                    </p>
                </div>

                <div className='contact_block'>
                    <h3 className='contact_block_header'>Режим работы:</h3>
                    <p className='contact_block_descr'>
                        пн-пт : 10:00 - 20:00 
                        <br/>
                        сб-вск : 12:00 - 20:00
                    </p>
                </div>
            </section>
        )
    }
}

export default Contact;