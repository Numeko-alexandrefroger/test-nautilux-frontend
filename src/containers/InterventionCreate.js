import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addIntervention} from "../actions";
import {format} from "date-fns";
import {fr} from "date-fns/locale";


function InterventionCreate() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIntervention({
      created_at: format(new Date(), 'yyyy-mm-dd hh:mm:ss', { locale: fr }),
      name,
      description,
      sender_name: senderName,
      sender_email: senderEmail,
      sender_phone: senderPhone,
    }));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Create Intervention</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div>
          <label htmlFor="senderName">Sender Name:</label>
          <input type="text" id="senderName" value={senderName} onChange={(event) => setSenderName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="senderEmail">Sender Email:</label>
          <input type="text" id="senderEmail" value={senderEmail} onChange={(event) => setSenderEmail(event.target.value)} />
        </div>
        <div>
          <label htmlFor="senderPhone">Sender Phone:</label>
          <input type="text" id="senderPhone" value={senderPhone} onChange={(event) => setSenderPhone(event.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default InterventionCreate;

const styles = {
  container: {
    marginTop: '3em',
    padding: '10em',
    width: '100%',
    border: '3px dashed #f1f1f1',
    borderRadius: '15px',
    textAlign: 'center',
  },
  placeholder: {
    fontSize: '1.5em',
    color: '#ccc',
    fontWeight: 'bold'
  }
};
