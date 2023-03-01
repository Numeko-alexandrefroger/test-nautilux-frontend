import React, {useEffect} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getInterventionById} from "../actions";


function Intervention() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const {intervention, isLoading, error} = useSelector((state) => state.intervention)

  useEffect(() => {
    dispatch(getInterventionById(parseInt(id)));
  }, []);

  return (
    <div className="" style={styles.container}>
    {isLoading && <p>Chargement...</p>}
    {error && <p>An error occurred: {error.message}</p>}
      {intervention !== null &&
      <div>
        <Link to="/">
          <button type="button">
            Retour
          </button>
        </Link>
        <div>
          <h1>{intervention.name}</h1>
          <div>
            <h5>Description</h5>
            <span>{intervention.description}</span>
          </div>
          <div>
            <h5>Demandeur</h5>
            <span>{intervention.sender_name}</span>
            <span>{intervention.sender_email}</span>
            <span>{intervention.sender_phone}</span>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default Intervention;

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
