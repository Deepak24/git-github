import {Link, Outlet} from "react-router-dom";
const Contact = () => {
    return(
        <>
            <h2>Contact Page</h2>
            <table className="table">
                <tr >
                    <td width={200}>
                        <ul>
                            <li><Link to="pune" >Pune</Link></li>
                            <li><Link to="mumbai" >Mumbai</Link></li>
                            <li><Link to="delhi" >Delhi</Link></li>
                        </ul>
                    </td>
                    <td>
                        <Outlet />
                    </td>
                </tr>
            </table>

        </>
    )
}

export default Contact;