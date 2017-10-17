import React, { Component } from 'react';

class AddProject extends Component {
  constructor (){
    this.state = {
      newProject : {}
    }
  }

  static defaultProps ={
    categories: ['Gutter Cleaning', 'Roofing', 'Lawn Care']
  }

  handleSubmit (e){
    console.log(this.ref.title.value);
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key ={category} value = "category">{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit ={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
