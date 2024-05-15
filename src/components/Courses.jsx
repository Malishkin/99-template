import courses from "../data/courses";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useState, useEffect } from "react";
const SORT_KEYS = ["title", "slug", "id"];
function sortKeys(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}
const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sort } = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortKeys(courses, sortKey)
  );
  useEffect(() => {
    setSortKey(sort);
  }, [sort]);

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedCourses(courses);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>

      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
