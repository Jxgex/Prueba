import React from "react";
import Select from 'react-select';
import Header from "../components/Header.jsx";
import "../styles/Profile.scss";
import data from "../utils/data";
const opcionesselect = [
  {value:'New' ,label:'New'},
  {value:'Client' ,label:'Cliente'},
  {value:'High Potential' ,label:'High Potential'},
  {value:'Low Potential' ,label:'Low Potential'},
];

class Perfil extends React.Component{
  render(){
  return(
    <>
    <Header active="profile" />
    <div className="general">
    <h1>Profile Page</h1>
    <form className="information">
          <div className="generalInfo">
            <h2>General Information</h2>
            <div className="generalData">
              <article>
                <label>Id:</label>
                <input type="text" name="idCliente" readOnly value={data.length+1}/>
              </article>
              <article>
                <label>First Name</label>
                <input type="text" name="firstName"/>
              </article>
              <article>
                <label>Last Name</label>
                <input type="text" name="lastName"/>
              </article>
              <article>
                <label>Phone</label>
                <input type="text" name="phoneNumber"/>
              </article>
              <article>
                <label>Email</label>
                <input type="text" name="email"/>
              </article>
              <article>
                <label>Age</label>
                <input type="text" name="age"/>
              </article>
              <article>
                <label>Lead Status</label>
                <Select options={opcionesselect}/>
              </article>
            </div>
          </div>
          <div className="additionalInfo">
            <h2>Address</h2>
            <div className="additionalData">
              <article>
                <label>Street</label>
                <input type="text" name="street"/>
              </article>
              <article>
                <label>Additional Info</label>
                <input type="text" name="aditionalInformation"/>
              </article>
              <article>
                <label>City</label>
                <input type="text" name="city"/>
              </article>
              <article>
                <label>State/Province</label>
                <input type="text" name="state"/>
              </article>
              <article>
                <label>ZIP/Postal Code</label>
                <input type="text" name="zipCode"/>
              </article>
              <article>
                <label>Country</label>
                <input type="text" name="country"/>
              </article>
            </div>
          </div>
          <div className="saveButton">
            <button type="submit">Save</button>
          </div>
        </form>
    </div>
    </>
  )
  }
  
}
export default Perfil;