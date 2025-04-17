import logo from '../images/Logo .svg';

export default function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt='Logo' />
            </div>

            {/* Links */}
            <div>
                <h3 className='footer-section-title'>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            
            <div>
                <h3 className='footer-section-title'>Contact</h3>
                <ul>
                    <li>Address: <br/> 123 Town </li>
                    <li>Phone: <br/> ++ 0123 456 789 </li>
                    <li>Email: <br/> little@lemon.com </li>
                </ul>
            </div>

            <div>
                <h3 className='footer-section-title'>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li>
                </ul>
            </div>
            
        </section>
    </footer>
  )
}