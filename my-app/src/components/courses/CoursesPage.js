import React from 'react';

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    };
        //OPTION 1 FOR BINDING
        //this.handleChange = this.handleChange.bind(this);

    //OPTION 2 FOR BINDING
    //handleChange(event) {
    //Arrow function will assume this context
    handleChange = event => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({course});
    }

    handleSubmit = event => {
        //Prevent page from posting back
        event.preventDefault();
        alert(this.state.course.title);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default CoursesPage;