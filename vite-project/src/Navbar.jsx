import { Link } from 'react-router-dom';

export default function Navbar() {
    // return (
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <nav class="navbar navbar-dark bg-dark">
    //             <ul class="navbar-nav mr-auto">
    //                 <li class="nav-item active">
    //                     <Link class="nav-link" to="/">Home</Link>
    //                 </li>
    //                 <li class="nav-item active">
    //                     <Link class="nav-link" to="/display">Display Developers</Link>
    //                 </li>
    //                 <li class="nav-item active">
    //                     <Link class="nav-link" to="/addDeveloper">Add developer</Link>
    //                 </li>
    //             </ul>
    //         </nav></div>
    // );
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/developers" className="nav-link">Developer Bios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/developers/add" className="nav-link">Create Bio</Link>
                </li>
            </ul>
        </nav>
    );
}