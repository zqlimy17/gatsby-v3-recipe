import React from "react";
import { Link } from "gatsby";
import setupTags from "../utils/setupTags";

const TagList = ({ recipes }) => {
  const tags = setupTags(recipes);
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map(tag => {
          const [text, value] = tag;
          return (
            <Link to={`/${text}`} key={text}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
