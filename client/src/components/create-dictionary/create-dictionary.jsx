import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { Button } from '@material-ui/core'

import { consistencyChecker } from '../../utils/consistencyChecker'
import { createDictionary } from '../../redux/dictionary/dictionary.actions'

class CreateDictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Domain', field: 'domain' },
        { title: 'Region', field: 'region' },
      ],
      data: [
        {},
      ],
      errorRows: null,
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const errors = consistencyChecker(this.state.data)
    if (errors.length < 1) {
      this.props.createDictionary(this.state.data)
      this.props.history.push('/')
    }
    this.setState({ errorRows: errors })
    const displayErrorRows = errors.map(error => error + 1)
    if (errors.length >= 1) {
      alert(`Please resolve the issues on rows ${displayErrorRows}.`)
    }
  }

  render() {
    const { errorRows } = this.state
    if (errorRows) {
      var correctErrorRow = errorRows.length > 1 ? errorRows[1] : errorRows[0]
    }
    return (
      <form onSubmit={this.onSubmit}>
        <MaterialTable
          title="Create A Dictionary"
          options={{
            search: false,
            sorting: false,
            paging: false,
            rowStyle: rowData => ({
              backgroundColor: (errorRows && correctErrorRow === rowData.tableData.id ? '#F00' : '#FFF')
            })
          }}
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState({ errorRows: null })
                  this.setState(prevState => {
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
                    this.setState({ errorRows: null })
                    this.setState(prevState => {
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
                  this.setState(prevState => {
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
}

export default withRouter(connect(null, { createDictionary })(CreateDictionary));