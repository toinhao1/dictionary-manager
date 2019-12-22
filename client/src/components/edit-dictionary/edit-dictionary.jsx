import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { Button } from '@material-ui/core'

// import { consistencyChecker } from '../../utils/consistencyChecker'
import { editDictionary, getOneDictionary } from '../../redux/dictionary/dictionary.actions'

class EditDictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Domain', field: 'domain' },
        { title: 'Region', field: 'region' },
      ],
      data: [],
      errorRows: [],
    }
  }
  componentDidMount() {
    this.props.getOneDictionary(this.props.match.params.id)
  }

  componentDidUpdate(oldProps) {
    if (oldProps.currentDictionary.length < 1) {
      this.setState({ data: this.props.currentDictionary })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    // const errors = consistencyChecker(this.state.data)
    // console.log(errors)
    // this.setState({ errorRows: errors })
    // if (errors.length < 1) {
    this.props.editDictionary(this.props.match.params.id, this.state.data)
    this.props.history.push('/')
    // }
  }

  render() {
    console.log(this.state.errorRows)
    return (
      <form onSubmit={this.onSubmit}>
        <MaterialTable
          title="Edit This Dictionary"
          options={{
            search: false, sorting: false, paging: false,
            rowStyle: (rowData, index) => ({
              backgroundColor: (this.state.errorRows && this.state.errorRows[0] === rowData.tableData.id) ? '#FOO' : '#FFF'
            })
          }}
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
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

const mapStateToProps = ({ dictionary }) => ({
  currentDictionary: dictionary.currentDictionary
})

export default withRouter(connect(mapStateToProps, { editDictionary, getOneDictionary })(EditDictionary));