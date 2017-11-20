import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchweatherdata} from '../actions/index'

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
       term: ''
     };
    this.searchbarhandler = this.searchbarhandler.bind(this);
    this.formsubmithandler = this.formsubmithandler.bind(this);

  }

  searchbarhandler(event) {
      this.setState({term:event.target.value})
  }

  formsubmithandler(event){
    event.preventDefault();
    this.props.fetchweatherdata(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.formsubmithandler} className="input-group">
        <input
        placeholder="Enter the city name for weather of that city"
        className="form-control"
        value={this.state.term}
        onChange={this.searchbarhandler}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchweatherdata},dispatch)
};

export default connect(null,mapDispatchToProps)(SearchBar);
