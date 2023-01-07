
import Table from 'react-bootstrap/Table';
import '../App.css';
import { Link } from 'react-router-dom'
function Det(){


    return(
        <div>
        
<h2 className='h2'>Employee Details</h2>
    <Table className='tab' striped bordered hover>
      <thead className='tabile'>
        <tr className='trow'>
          <th>UserId</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Designation</th>
          <th>Customization</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>markes@gmail.com</td>
          <td>chennai </td>
          <td>full stack dev</td>
          <td>
            {/* <a href={'/'}>Delete</a>.. */}
          <Link  className="btn btn-link"  to={"/Add"}>Add</Link>
          <Link  className="btn btn-link"  to={"/Edd"}>Edit</Link>
          <button className="btn btn-link" >Delete</button>

          {/* <a href={'/Add'}>Add</a> & <a href={'/Edd'}>Edit Emp</a> */}
          
          </td>
        </tr>


        <tr>
          <td>2</td>
          <td>raja</td>
          <td>rajas@gmail.com</td>
          <td>chennai india </td>
          <td>full stack dev</td>
          <td>
            {/* <a href={'/'}>Delete</a>.. */}
          <Link  className="btn btn-link"  to={"/Add"}>Add</Link>
          <Link  className="btn btn-link"  to={"/Edd"}>Edit</Link>
          <button className="btn btn-link" >Delete</button>

          {/* <a href={'/Add'}>Add</a> & <a href={'/Edd'}>Edit Emp</a> */}
          
          </td>
        </tr>
       
      </tbody>
    </Table>

        </div>
    )
}
export default Det;
