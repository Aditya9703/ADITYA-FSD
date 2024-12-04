import React from 'react'
import { Link, Outlet} from 'react-router-dom';

const mainlayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/CounterApp' >CounterApp</Link>
                </li>
                <li>
                    <Link to='/ImageApp'>Image App</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}
export default mainlayout;
