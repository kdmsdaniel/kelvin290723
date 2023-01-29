const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const TodosCategories = require("../models/todos-categories.models");

const users = [
  { username: "Iannacus", email: "ian@gmail.com", password: "1234" }, // id: 1
  { username: "Jhorman", email: "jhorman@gmail.com", password: "1234" }, // id: 2
  { username: "Lucero", email: "lucero@gmail.com", password: "1234" }, // id: 3
];

const todos = [
  { title: "Estudiar node", description: "lalala ", user_id: 1 }, 
  { title: "Pasear al perro", description: "lalala 2", user_id: 1 }, 
  { title: "lavar platos", user_id: 2 }, 
  {
    title: "ir chequeo mensual",
    description: "porque node no me deja",
    user_id: 3,
    isComplete: true,
  },
];

const categories = [
  { name: "personal" }, 
  { name: "educacion" }, 
  { name: "salud" },
  { name: "trabajo" }, 
  { name: "hogar" }, 
  { name: "cocina" }, 
  { name: "deporte" }, 
  { name: "ocio" }, 
  { name: "financiero" }, 
  { name: "entretenimiento" }, 
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
];


db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 250);
    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 400);
  })
  .catch((error) => console.log(error));
