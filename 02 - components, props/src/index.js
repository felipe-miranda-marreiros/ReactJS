import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetail";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:45PM"
          post="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 2:00AM"
          post="I like it!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Yesterday at 5:00PM "
          post="Very helpful!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
