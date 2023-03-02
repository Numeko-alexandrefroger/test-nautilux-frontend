import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addIntervention, getInterventions} from "../actions";
import {StyledActionHeader, StyledButtonCancel, StyledButtonCreated, StyledButtonCreatedDisabled} from "../ui/styles";
import styled from "styled-components";

function InterventionCreate() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if((typeof name === "string" && name !== "")
      && (typeof description === "string" && description !== "")
      && (typeof senderName === "string" && senderName !== "")
      && (typeof senderEmail === "string" && senderEmail !== "")
      && (typeof senderPhone === "string" && senderPhone !== "")){
      setIsButtonDisabled(false)
    }else{
      setIsButtonDisabled(true)
    }
  }, [name, description, senderName, senderEmail, senderPhone]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIntervention({
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
    <Container>
      <form onSubmit={handleSubmit}>
        <StyledActionHeaderOverride>
          <Link to="/">
            <StyledButtonCancel>
              Annuler
            </StyledButtonCancel>
          </Link>
          {
            isButtonDisabled ? <StyledButtonCreatedDisabled disabled>Créer</StyledButtonCreatedDisabled>
              : <StyledButtonCreated type={"submit"}>Créer</StyledButtonCreated>
          }
        </StyledActionHeaderOverride>
        <FormGroupField>
          <label htmlFor="name">Nom de l'intervention</label>
          <input type="text" id="name" placeholder={"Nom"} value={name} onChange={(event) => setName(event.target.value)} />
        </FormGroupField>
        <FormGroupField>
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" placeholder={"Saisissez la description de l'intervention"} value={description} onChange={(event) => setDescription(event.target.value)} />
        </FormGroupField>
        <FormGroupField>
          <label htmlFor="senderName">Demandeur</label>
          <input type="text" id="senderName" placeholder={"Prénom Nom"} value={senderName} onChange={(event) => setSenderName(event.target.value)} />
        </FormGroupField>
        <FormGroupField>
          <label htmlFor="senderEmail">Email</label>
          <input type="text" id="senderEmail" placeholder={"email@domaine.fr"} value={senderEmail} onChange={(event) => setSenderEmail(event.target.value)} />
        </FormGroupField>
        <FormGroupField>
          <label htmlFor="senderPhone">Téléphone</label>
          <input type="text" id="senderPhone" placeholder={"0600000000"} value={senderPhone} onChange={(event) => setSenderPhone(event.target.value)} />
        </FormGroupField>
      </form>
    </Container>
  );
}

export default InterventionCreate;

const Container = styled.div`
  width: 50%;
  min-width: 200px;
  max-width: 450px;
  margin: 0 auto;
`;

const StyledActionHeaderOverride = styled(StyledActionHeader)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const FormGroupField = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 9px;
  margin-bottom: 20px;
  
  & label{
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  
  & input, & textarea{
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: transparent;
    padding: 8px;
    font-size: 10px;
    font-weight: bold;
    
    &::placeholder{
      font-size: 10px;
      color: #A3A3A3;
    }
  }
  
  & textarea{
    min-height: 80px;
  }
`;

