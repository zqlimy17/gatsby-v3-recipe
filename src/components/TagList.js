import React from "react";
import { Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";

const TagList = ({ recipes }) => {
  const tags = setupTags(recipes);
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map(tag => {
          const [text, value] = tag;
          const tagSlug = slugify(text, { lower: true });
          return (
            <Link to={`/tags/${tagSlug}`} key={text}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
