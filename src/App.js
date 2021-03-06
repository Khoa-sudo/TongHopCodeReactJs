import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Home/Header";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import pagenotfound from "./pages/PageNotFoung/pagenotfound";
import Profile from "./pages/Profile/Profile";
import TodolistRFC from "./pages/ToDoList/TodolistRFC";
import TodolistRCC from "./pages/ToDoList/TodolistRCC";
import ToDoListRedux from "./pages/ToDoList/ToDoListRedux";
import DemoProps from "./props/DemoProps";
function App() {
  return (
    <div className="App">
      <DemoProps title={'Cybersoft'}/>
      <DemoProps title={'Cybersoft 1'}/>
      <DemoProps title={'Cybersoft 2'}/>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/todolistrfc" component={TodolistRFC} />
          <Route exact path="/todolistrcc" component={TodolistRCC} />
          <Route exact path="/todolistredux" component={ToDoListRedux} />

          {/* Không tìm thấy trang khi người dùng nhập sai URL */}
          <Route path="*" component={pagenotfound} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
