import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllDictionarys } from '../../redux/dictionary/dictionary.actions'
import HomeGrid from '../home-grid/home-grid'


class Home extends Component {
  componentDidMount() {
    this.props.displayAll()
  }

  render() {
    return (
      <>
        <HomeGrid allDictionarys={this.props.allDictionarys} />
      </>
    )
  }
}

const mapStateToProps = ({ dictionary }) => ({
  allDictionarys: dictionary.displayDictionarys
})

const mapDispatchToProps = dispatch => ({
  displayAll: () => dispatch(fetchAllDictionarys())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);