const React = require('react');
const { NavLink } = require('react-router-dom');
const battleMusic = require('./battleMusic');

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/" onClick={() => battleMusic.stopMusic()}>
                Home
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" to="/instructions" onClick={() => battleMusic.stopMusic()}>
                Instructions
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" to="/pokedex" onClick={() => battleMusic.stopMusic()}>
                Pokedex
        </NavLink>
      </li>

    </ul>
  );
}

module.exports = Nav;
