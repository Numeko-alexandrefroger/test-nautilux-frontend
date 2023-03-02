import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getInterventions, sortInterventionsByDate} from "../actions";
import { format } from "date-fns"
import { fr } from 'date-fns/locale'
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";

function InterventionsList() {
  const dispatch = useDispatch()
  const history = useHistory()
  const {interventions, isLoading, error} = useSelector((state) => state.interventionList)

  useEffect(() => {
    if( interventions.length === 0 ){
      dispatch(getInterventions());
    }
  }, []);

  return (
    <div className="" style={styles.container}>
      {isLoading && <p>Chargement...</p>}
      {error && <p>An error occurred: {error.message}</p>}
      <StyledActionHeader>
        <Link to="/create">
          <StyledButtonCreated>
            Créer une intervention
          </StyledButtonCreated>
        </Link>
        <span>{`${interventions.length} interventions`}</span>
      </StyledActionHeader>
      {
        (interventions.length > 0) &&
          <StyledTable>
            <thead>
              <tr>
                <td onClick={() => dispatch(sortInterventionsByDate())}>Date</td>
                <td>Nom</td>
                <td>Description</td>
                <td>Demandeur</td>
                <td>Coordonnées</td>
              </tr>
            </thead>
            <tbody>
              {
                interventions.map(intervention => {
                  const timeStamp = Date.parse(intervention.created_at);
                  const date = new Date(timeStamp);
                  const formattedDate1_1 = format(date, 'dd', { locale: fr });
                  const formattedDate1_2 = format(date, 'MMMM', { locale: fr }).substring(0, 3);
                  const formattedDate2 = format(date, 'dd/MM/yy hh:mm', { locale: fr });

                  return <tr key={intervention.id} onClick={() => history.push(`/intervention/${intervention.id}`)}>
                    <td>
                      <div>
                        <span>{formattedDate1_1}</span>
                        <span>{formattedDate1_2}</span>
                      </div>
                    </td>
                    <td>
                      <span>{intervention.name}</span>
                      <span>{formattedDate2}</span>
                    </td>
                    <td>{intervention.description}</td>
                    <td>{intervention.sender_name}</td>
                    <td>
                      <span>{intervention.sender_email}</span>
                      <span>{intervention.sender_phone}</span>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </StyledTable>
      }
    </div>
  );
}

export default InterventionsList;

const StyledActionHeader = styled.div`
  margin: 30px 0 15px 0;
  
  & span{
    margin-left: 15px;
    color: #A6A6A6;
    font-size: 10px;
    font-weight: bold;
  }
`;

const StyledButtonCreated = styled.button`
  background-color: #FFD500;
  border: 0px solid transparent;
  color: white;
  border-radius: 5px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: bold;
`;

const StyledTable = styled.table`
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  font-size: 12px;
  width: 100%;
  
  & thead{
    background-color: #ECECEC;
    
    & tr{
      & td{
        padding: 10px 0;
        text-align: left;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
        
        &:first-child{
          position: relative;
          text-align: center;
          padding: 14px 25px 14px 12px;
          cursor: pointer;
          width: 85px;
          
          &:after, &:before{
            border: 4px solid transparent;
            content: "";
            display: block;
            height: 0;
            right: 13px;
            top: 50%;
            position: absolute;
            width: 0;
          }
          
          &:before{
            border-bottom-color: black;
            margin-top: -10px;
          }
          
          &:after{
            border-top-color: black;
            margin-top: 1px;
          }
        }
      }
    }
  }
  
  & tbody{
    & tr {
      border-bottom: 2px solid #E5E5E5;
      cursor: pointer;
      
      &:hover{
        background-color: #FBFBFB;
      }
      
      & td{
        padding: 8px 30px 8px 0;
        text-align: left;
        line-height: 12px;
        
        &:nth-child(1){
          text-align: center;
          padding: 8px 12px;
          
          div{
            border-radius: 10px;
            background-color: #2B2B2B;
            color: white;
            padding: 4px 6px;
            display: inline-block;
            margin: 0 auto;
            
            span{
              display: block;
              font-weight: bold;
              
              &:last-child{
                margin-top: 2px;
                font-size: 10px;
                text-transform: uppercase;
              }
            }
          }
        }
        
        &:nth-child(2){
          span{
            display:block;
            
            &:first-child{
              font-weight: bold;
              margin-bottom: 5px;
              white-space: nowrap;
            }
            
            &:last-child{
              color: #6F6F6F;
            }
          }
        }
        
        &:nth-child(4){
          white-space: nowrap;
        }
        
        &:nth-child(5){
          span{
            display:block;
            
            &:first-child{
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
`;

const styles = {
  container: {
    width: '100%',
  }
};
