import React from 'react';

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarMain">
          <span className="name">João Victor</span>
          <span className="role">Desenvolvedor Web</span>
        </div>
        <ul>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
        <div>Linkedin Github</div>
      </div>
    </div>
  );
}

export default Sidebar;
