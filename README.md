# ToDo App

This project is for learning purpose.

## Table of content
[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[React + Vite](#react--vite)

## General Description
<pre>
<ol>
    <li>Create a page (component) that displays a button that once clicked will bring up a form 
    where the user can enter information for the todo item (title, deadline, and status - in progress, not started, or done).</li>
    <li>Once the user has entered the item, dismiss the page and show the item in the list on the page.</li>
    <li>If the user clicks on any items in the list, the user can edit the information of that item. </li>
</ol>
</pre>

## Technologies

- JavaScript
- React + Vite
- HTML / CSS
- Material UI

## Project Structure

* [src/](./src)
    * [components/](./src/components)
        * [Form.jsx](./src/components/Form.jsx)
        * [StatusIndicator.jsx](./src/components/StatusIndicator.jsx)
        * [TodoItem.jsx](./src/components/TodoItem.jsx)
    * [App.css](./src/App.css)
    * [App.jsx](./src/App.jsx)
    * [main.jsx](./src/main.jsx)
* [index.html](./index.html)


## Instruction
1. Open your terminal and clone the repository with the following command: 
```
git clone https://github.com/TinNguyen01600/ToDo-App
```
2. Install all the packages:
```
npm install
```
3. Start the application in your local machine:
```
npm run dev
```
** Or simply access the deployed version on Netlify (https://tin-nguyen-to-do-app.netlify.app/).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh