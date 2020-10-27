import React from 'react';

function Navbar (){
    return(
        <footer className="footer">
        <nav
            className="navbar fixed-bottom navbar-light bg-transparent flex-fill justify-content-center padding-top: 60px;">
            <span className="navbar-text">
                win win win win <span role="img" aria-label="Heart">❤️</span> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> andreaMgamez </span>
        </nav>
    </footer>


    )
}

export default Navbar;