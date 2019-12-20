import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { Button } from '@material-ui/core'

import { createDictionary } from '../../redux/dictionary/dictionary.actions'

const CreateDictionary = ({ createDictionary, history }) => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Domain', field: 'domain' },
      { title: 'Region', field: 'region' },
    ],
    data: [
      {},
    ],
  });

  const onSubmit = (e) => {
    e.preventDefault()
    createDictionary(state.data)
    history.push('/')
  }

  return (
    <form onSubmit={onSubmit}>
      <MaterialTable
        title="Create A Dictionary"
        options={{ search: false, sorting: false, paging: false }}
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
      <Button variant="contained" type="submit" >Submit</Button>
    </form>
  );
}

export default withRouter(connect(null, { createDictionary })(CreateDictionary));