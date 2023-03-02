import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getInterventionById} from "../actions";
import {StyledActionHeader, StyledButtonCancel} from "../ui/styles";
import styled from "styled-components";


function Intervention() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const {intervention, isLoading, error} = useSelector((state) => state.intervention)

  useEffect(() => {
    dispatch(getInterventionById(parseInt(id)));
  }, [dispatch, id]);

  return (
    <Container>
    {isLoading && <p>Chargement...</p>}
    {error && <p>An error occurred: {error.message}</p>}
      {intervention !== null &&
      <div>
        <StyledActionHeader>
          <Link to="/">
            <StyledButtonCancel>
              Retour
            </StyledButtonCancel>
          </Link>
        </StyledActionHeader>
        <InterventionDetails>
          <h3>{intervention.name}</h3>
          <div>
            <h6>Description</h6>
            <div>{intervention.description}</div>
          </div>
          <div>
            <h6>Demandeur</h6>
            <div className={"highlight"}>{intervention.sender_name}</div>
            <div>{intervention.sender_email}</div>
            <div>{intervention.sender_phone}</div>
          </div>
        </InterventionDetails>
      </div>
      }
    </Container>
  );
}

export default Intervention;

const Container = styled.div`
  width: 50%;
  min-width: 200px;
  max-width: 450px;
  margin: 0 auto;
`;

const InterventionDetails = styled.div`
  border: 1px solid #ECECEC;
  border-radius: 10px;
  padding: 10px;
  
  & > div {
    margin-bottom: 20px;
    
    .highlight{
      font-size: 14px;
      font-weight: bold;
    }
      
    & > div {
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 5px;
    }
  }
  h3{
    margin-bottom: 20px;
  }
  
  h3, h6 {
    font-weight: bold;
  }
  
  h6 {
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;