import React, { useState } from 'react';
import { db } from '../firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddTodo = () => {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() !== "") {
            try {
                e.preventDefault();
                console.log("try")
                await addDoc(collection(db, "todos"), {
                    name,
                    completed: false,
                });
                setName("");
            } catch (err) {
                console.error(err);
                alert(err.message);
            }finally{
                console.log("finally")
            }
        }
    }
    
    return (
        <>
            <div className="text-center pt-5">
                {/* <img src="https://i.ibb.co/8cDgdFX/Logo.png" alt="network-logo" width="72" height="72" /> */}
                <h2>Create todo:</h2>

            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {/* <small className="form-text text-muted">Please fill your name</small> */}
                            </div>
                            <button className="btn btn-primary btn-block col-lg-2" type="submit"> <i className="fa fa-refresh fa-spin" ></i> Add New</button>

                        </form>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-body">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddTodo;