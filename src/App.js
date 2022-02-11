import React from "react";
import CreateBlog from "./create";
import BlogslistView from "./blogslist";
import BlogView from "./show";
import BlogEdit from "./edit";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BlogslistView/>}/>
        <Route path="/Create/" element={<CreateBlog/>}/>
        <Route path="/show/:id" element={<BlogView/>}/>
        <Route path="/EditBlog/:id" element={<BlogEdit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
