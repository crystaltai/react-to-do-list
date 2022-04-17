# To Do List (built with React)

Project to create a to do list using React, allowing user to add, delete and toggle task completion

**🔗 Live preview:** https://crystaltai.github.io/react-to-do-list/

![](https://github.com/crystaltai/react-to-do-list/blob/main/react-to-do-list-demo.gif)

## Built with

### Technologies

- HTML
- CSS
- JS
- React

### Tools

- Visual Studio Code
- Git and GitHub

### Third party code

- [Font Awesome](https://fontawesome.com/)

## Summary

### What I learned

4/15/22

- Organizing and defining React components to ensure logic was isolated and reusable
- Utilized React Hooks to add React state to function components in order to preserve and update the todo tasks list
- Used props to pass functions and data down the component tree

4/16/22

- Fetched todo list data using Fetch API and useEffect hook
- The fetchData function makes the API call to fetch the todo's and set them to the local state
  - Fetch API is a tool that's built into most modern browsers on the window object (window.fetch), allowing to make HTTP requests using JS promises
  - Since this is a simple GET request with fetch, I used Fetch API to call the JSONPlaceholder API using fetch()
  - The response received (a promise) is not JSON, but an object with a series of methods
    - The 1st chained then() takes the response and converts it into JSON data
    - The 2nd chained then() takes the converted JSON data and sets it to the local state with useState()
- The fetchData request is made within the useEffect hook
  - An empty dependencies array is added as the second argument so that the request is only made once

### Project Summary

4/15/22

- I created a to do list tracker using React, which starts up by pulling in mock data from a JSON file (data.json). User is able to add, delete and toggle tasks

4/16/22

- I replaced the mock todo list data JSON file (data.json) to fetch data with a free fake call to API (https://jsonplaceholder.typicode.com/todos)
- This exercise was meant to imitate fetching data from a backend or third party API
