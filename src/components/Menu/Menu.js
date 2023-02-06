import React from "react";



const Menu = () => {
    const [responsive, setResponsive] = React.useState(false);
    
    return (
        <div className={`${responsive ? "topnav responsive" : "topnav"}`} id="myTopnav">
            <a href="#home" className="active" onClick={() => setResponsive(false)}>Home</a>
            <a href="#aboutMe" onClick={() => setResponsive(false)}>Sobre Mim</a>
            <a href="#projects" onClick={() => setResponsive(false)}>Projetos</a>
            <a  className="icon" onClick={() => {setResponsive(!responsive)}}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}

export default Menu;