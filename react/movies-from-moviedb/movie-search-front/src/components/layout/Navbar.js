import React from 'react';
import {NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = ()  => {
    return (
        <nav className="active"> 

            <div>
            <table className="titleBar">
              <tbody>
                <tr>
                   <td>
                    <a href="https://www.cinemaclock.com/movies/top-10" target="_blank">
                    < img alt="" width="100" src="https://fanart.tv/media/movie-header.jpg"/>
                    </a>
                    </td>
                    <td width="10" className="column"/>
                    <td width="10"/>
                    <td>
                    <a href="https://www.themoviedb.org/" target="_blank">
                    < img alt="" width="60" src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"/>
                    </a>
                   </td>
                   <td width="10" className="column"/>
                   <td width="10"/>
                   <td>
                      <NavLink to="/" exact className="link-decor" activeStyle={{ color:'blue'}}>  Home Page </NavLink>
                   </td>
                   <td width="10" className="column"/>
                   < td width="10"/>
                   <td>
                     <NavLink to="/new" exact  className="link-decor" activeStyle={{ color:'blue'}}>  Add Comment </NavLink>
                   </td>
                   < td width="10" className="column"/>
                   < td width="10"/>
            
                   <td>
                     <NavLink to="/comments" exact className="link-decor" activeStyle={{ color:'blue'}}>   View All Comments </NavLink>
                   </td>
                </tr>
              </tbody>
            </table>
            
                
            </div>
        </nav>
        )    
}  

export default Navbar;