import React from "react";
import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="nav">
      <ul>
        <li>Testing out /blog page and it's content.</li>
      </ul>
      <div>
        <Link to="/">
          <button>Back to Website</button>
        </Link>
      </div>

      {/* <NavBar/>
<Switch>
<Developer/>
<Personal/>
<Travel/>
<FantasySports/>
<Entertainment/> (Movies + Gaming) (Add/drive content with personal rankings and lists).
</Switch> */}
    </div>
  );
};

export default Blog;
