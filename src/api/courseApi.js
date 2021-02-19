import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
      method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(course)
    })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId, simulateAPIError) {
  if (simulateAPIError) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => reject("simulateAPIError-20210219-0301: API Error simulation."),
        2000
      );
    });
  } else {
    return fetch(baseUrl + courseId, { method: "DELETE" })
      .then(handleResponse)
      .catch(handleError);
  }
}