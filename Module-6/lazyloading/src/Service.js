import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
    return (
        <div>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand mx-5'><h1>Logo</h1></Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/aboutus' className='nav-link'>About us</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/service' className='nav-link active'>Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='container'>
                <h2 className='text-center m-5'>Service page</h2>
                <ul className='nav nav-pills'>
                    <li className='nav-item'>
                        <Link to='/service/service1' className='nav-link'>Service 1</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/service/service2' className='nav-link'>Service 2</Link>
                    </li>
                </ul>
                <Outlet />
            </section>
        </div>

    )
}

export default Service