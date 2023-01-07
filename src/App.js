
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function App(){

    return(
       <div>
<h2 className='add'>Add Employee</h2>
    <Form className='empadd'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Address</Form.Label>
        <Form.Control type="string" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="string" placeholder="Enter Designation" />
      </Form.Group>
      
      <Button variant="primary" type="submit" href={'/'} >


        Submit
      </Button>
   
    </Form>
       </div>
    )
}

   export default App;
        