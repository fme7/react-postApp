import { useEffect, useState } from "react";
import "./Posts.css";

function Posts(props) {
  // let { a } = props;
  // let [count, setCount] = useState(0);
  // let [count2, setCount2] = useState(0);
  // function increase() {
  //   setCount(count + 1);
  // }
  // useEffect(() => {
  //   console.log("Component mounted");
  //   return () => {
  //     console.log("component unmounted");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("component updated count");
  // }, [count]);
  // useEffect(() => {
  //   console.log("component updated a");
  // }, [a]);

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.length
        ? posts.map((postObj) => {
            return (
              <div className="post">
                <b>Title:</b> {postObj.title}
              </div>
            );
          })
        : "There is not any post"}
    </div>
  );
}

export default Posts;
