import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getInterventions, sortInterventionsByDate} from "../actions";
import { format } from "date-fns"
import { fr } from 'date-fns/locale'
import {Link, useHistory} from "react-router-dom";

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
      <div>
        <Link to="/create">
          <button type="button">
            Créer une intervention
          </button>
        </Link>
        <span>{`${interventions.length} interventions`}</span>
      </div>
      {
        (interventions.length > 0) &&
          <table>
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
                  // const timeStamp = Date.parse(intervention.created_at);
                  // const date = new Date(timeStamp);
                  // const dateString = intervention.created_at;
                  // console.log("-----------------",)
                  // console.log("intervention", intervention)
                  // console.log("timeStamp", timeStamp)
                  // console.log("date", date)
                  // const date = parseISO(dateString.toString());
                  // const formattedDate1 = format(date, 'dd MMMM', { locale: fr });
                  // const formattedDate2 = format(date, 'dd/MM/yy hh:mm', { locale: fr });

                  return <tr key={intervention.id} onClick={() => history.push(`/intervention/${intervention.id}`)}>
                    <td>{intervention.created_at}</td>
                    <td>
                      <span>{intervention.name}</span>
                      <span>{intervention.created_at}</span>
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
          </table>
      }
    </div>
  );
}

export default InterventionsList;

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
