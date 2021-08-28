import React from 'react';

import { BlogItem } from "../BlogItem/BlogItem.jsx";
import { blogPosts} from "../../data/blog-posts.js";

import "./BlogList.css"

export const BlogList = () => (
    <div className = "blogList">
        {blogPosts.map((post,index) => <BlogItem className='blogItem' key={index} post={post} />)}
    </div>
);