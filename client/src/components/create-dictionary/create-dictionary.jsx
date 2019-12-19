import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import { createDictionary } from '../../redux/dictionary/dictionary.actions'

const CreateDictionary = ({ addDictionary }) => {
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
    addDictionary(state.data)
  }
  console.log(state.data)
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

const mapDispatchToProps = dispatch => ({
  addDictionary: dictionary => dispatch(createDictionary(dictionary))
})

export default connect(null, mapDispatchToProps)(CreateDictionary);