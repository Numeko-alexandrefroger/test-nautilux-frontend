import React from 'react';

function InterventionsList() {
  return (
    <div className="" style={styles.container}>
      <p style={styles.placeholder}>Implémente le tableau ici</p>
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
