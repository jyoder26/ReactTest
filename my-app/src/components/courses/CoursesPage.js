import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

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
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />

                <input type="submit" value="Save" />
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return{
        //wraps all actions in the class
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);