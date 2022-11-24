import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ( { courses, onDeleteClick } ) => (
  <table className="table">
    <colgroup>
      <col className="cssc1" />
      <col className="cssc2" />
      <col className="cssc3" />
      <col className="cssc4" />
    </colgroup>

    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map( course => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                target={"win_" + course.slug}
                href={"http://pluralsight.com/courses/" + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>

            <td>
              <button className="btn btn-outline-danger" onClick={() => onDeleteClick( course )} >Delete</button>
            </td>
          </tr>
        );
      } )}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default CourseList;
