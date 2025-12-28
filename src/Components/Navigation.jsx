import React from 'react'

const Navigation = () => {
  return (
    <nav className="navigation">
        {/* Nav items */}
        <div>
            <ul>
                <li>
                    <a href='#acerca-de-mi'>Acerca de mí</a>
                </li>

                <li>
                    <a>Proyectos</a>
                </li>

                <li>
                    <a>Habiliades y Conocimientos</a>
                </li>

                <li>
                    <a>Contacto</a>
                </li>
            </ul>
        </div>

        {/* Links */}
        <div>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/alonso-mur%C3%BAa-7857a3252/">
                        <img src='vectors/linkedin.svg'
                        className='linkedin-logo'
                        alt='Logo de LinkedIn'></img>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/Celixx">
                        <img
                            src='images/github-mark-white.png'
                            className='github-logo'
                            alt='Logo de GitHub'></img>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;