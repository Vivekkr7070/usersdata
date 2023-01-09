import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader } from "reactstrap";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Userdetails() {
    const [sid,setid]=useState();
    const [data, setData] = useState();
    const [ddata, setdData] = useState();
    const [cname, setcName] = useState();
    const [clname, setclname] = useState();
    const [cemail, setcemail] = useState();
    const [upsmodal, upssetnmodal] = useState();
    const [modal, setmodal] = useState(false);
    // const [smodal, setsmodal] = useState(false);
    const [deleteu, deletemodal] = useState(false);
    const [nmodal, setnmodal] = useState(false);
    const [ufname, setfName] = useState(" ");
    const [ulname, setlName] = useState(" ");
    const [uemail, setEmail] = useState(" ");
    const [image, setImage] = useState(" ")
    const [sdta, setfedata] = useState([])
  

    const onViewdetails = (element) => {
        const user = element;
        setfedata(user)
        setfName(user.first_name);
        setlName(user.last_name)
        setEmail(user.email);
        setImage(user.avatar)
        setmodal(true)
        console.log(user);
        console.log(uemail);
        console.log(sdta);
    };

    useEffect(() => {
        const fetchproducts = async () => {
            const res = await fetch('https://reqres.in/api/users');
            const ab = await res.json();
            setData(ab)
        }
        fetchproducts();
    },[]);
   

  //crud functions
  const deleteuserd =(id)=>{
    setid(id)
    deletemodal(true);
  }
  
       const deleteuser = async(sid) => {
         await axios.delete(`https://reqres.in/api/users/${sid}`)
            .then(() => setdData({ ddata: 'Delete successful' }));
            deletemodal(false)
                  toast("Deleted successfully",{
                    position :"top-center"        
                }); 
             console.log(ddata)
        }
        
    const updateuser = (element) => {
        const user = element;
        setfedata(user)
        setfName(user.first_name);
        setlName(user.last_name);
        setEmail(user.email);
        const article = { "fname": cname,"lname":clname };
        axios.put('https://reqres.in/api/users/1', article)
            .then(response => console.log(response.data))
        upssetnmodal(true)
    }

    const createuser = () => {
        console.log(cname);
        console.log(clname);
        console.log(cemail);
        const article = { "name": cname, "job": clname };
        axios.post('https://reqres.in/api/users', article)
            .then(response => console.log(response.data))
        
    }

 //here ending of crud functions

    return (
        <>
                     
            <th> <button type="button" className="btn btn-success mx-2 my-2" onClick={()=>{setnmodal(true)}}>Create new user</button></th>
            <table className="table table-dark mx-2 my-2">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Email</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Action</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                {data?.data?.map((element, index) => {
                    return <tbody key={element.id}>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{element.email}</td>
                            <td>{element.first_name}</td>
                            <td>{element.last_name}</td>
                            <td><button type="button" className="btn btn-secondary mx-2 my-2" onClick={() => {
                                onViewdetails(element);
                            }}>View details</button></td>
                            <td><button type="button" className="btn btn-danger mx-2 my-2  btn-sm" onClick={() =>{deleteuserd(element.id) }}>Delete</button></td>
                            <td><button type="button" className="btn btn-success mx-2 my-2 btn-sm" onClick={() =>{ updateuser(element) }} >Update</button></td>
                        </tr>
                    </tbody>
                })}
            </table>
            <div>


                {/* modal for view user details */}
                <div>
                    <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
                        <ModalHeader toggle={() => setmodal(!modal)}>
                            User details
                            <form action="" >
                                <p><img src={image} alt="a" /></p>
                                <input type="text" className="list-group-item mx-3 my-3" name="username" Value={ufname}></input>
                                <input className="list-group-item mx-3 my-3 eee" name="email" Value={ulname} ></input>
                                <input className="list-group-item mx-3 my-3" name="password" Value={uemail} ></input>
                                &nbsp;
                            </form>
                        </ModalHeader>
                    </Modal>
                </div>

                {/* modal for creating new user*/}
                <div>
                    <Modal size="lg" isOpen={nmodal} toggle={() => setnmodal(!modal)}>
                        <ModalHeader toggle={() => setnmodal(!modal)}>
                            Create new user
                            <form action="">
                                <input type="text" className="list-group-item mx-3 my-3" value={cname} onChange={(e)=>{setcName(e.target.value)}}></input>
                                <input type="text" className="list-group-item mx-3 my-3"  value={clname} onChange={(e)=>{setclname(e.target.value)}} ></input>
                                <input type="text" className="list-group-item mx-3 my-3" value={cemail} onChange={(e)=>{setcemail(e.target.value)}}></input>
                                &nbsp;
                            </form>
                            <div className="crudop">
                                <button type="button" className="btn btn-success mx-2 my-2" onClick={createuser}>Create</button>
                                <button className="btn btn-primary" onClick={() => { (setnmodal(false)); }}>Cancel</button> </div>
                        </ModalHeader>
                    </Modal>
                </div>

                {/* modal for updating user*/}
                <div>
                    <Modal size="lg" isOpen={upsmodal} toggle={() => upssetnmodal(!modal)}>
                        <ModalHeader toggle={() => upssetnmodal(!modal)}>
                            Update user
                            <form action="">
                                <input type="text" className="list-group-item mx-3 my-3" defaultValue={ufname} onChange={(e)=>{setcName(e.target.value)}} ></input>
                                <input type="text" className="list-group-item mx-3 my-3" defaultValue={ulname} onChange={(e)=>{setcName(e.target.value)}}></input>
                                <input type="text" className="list-group-item mx-3 my-3" defaultValue={uemail} onChange={(e)=>{setcName(e.target.value)}}></input>
                                &nbsp;
                            </form>
                            <div className="crudop">
                                <button type="button" className="btn btn-success mx-2 my-2" onClick={createuser}>Update</button>
                                <button className="btn btn-primary" onClick={() => { (upssetnmodal(false)) }}>Cancel</button> </div>
                        </ModalHeader>
                    </Modal>
                </div>

                    {/* modal for deleting user */}
                    <div>                 
                    <Modal size="lg" isOpen={deleteu} toggle={() =>deletemodal(!modal)}>
                        <ModalHeader toggle={() => deletemodal(!modal)}>
                            <p>Do you really want to delete this ?</p>

                            <div className="crudop">
                                <button type="button" className="btn btn-success mx-2 my-2" onClick={()=>{deleteuser()}}>Confirm</button>
                                <button className="btn btn-primary" onClick={() =>{(deletemodal(false)) }}>Cancel</button> </div>
                        </ModalHeader>
                    </Modal>
                </div>

           {/* Tostitfy container */}
           <ToastContainer />
            </div>

        </>
    )
}
