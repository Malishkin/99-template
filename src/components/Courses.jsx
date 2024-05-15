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
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortKeys(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedCourses([...courses]);
    } else {
      setSortedCourses(sortKeys(courses, sortKey));
    }
  }, [sortKey, navigate]);

  const handleSortChange = (event) => {
    const newSortKey = event.target.value;
    setSortKey(newSortKey);
    navigate(`?sort=${newSortKey}`);
  };

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>

      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortKey || ""} onChange={handleSortChange}>
        <option value="">Select</option>
        {SORT_KEYS.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
