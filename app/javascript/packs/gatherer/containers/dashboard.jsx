import React from 'react';

class LandingPage extends React.Component {
    state = { 
        loading: false,
        searchField: '',
        searchResults: []
    };

    handleChange(event) {
        this.setState({searchField: event.target.value});
      }

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
      handleSubmit = (event) => {
          //submit to back end
          this.setState({searchField: ''});
          event.preventDefault()     
     }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
        <label>
          Card Name:
          <input type="text"
            style={{marginLeft: '10px'}}
           value={this.state.searchField}
           onChange={this.handleChange('searchField')}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default LandingPage