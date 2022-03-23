import React from "react";
import Article from "./Article";

function ArticleList({posts}){
console.log(posts)
  const post = posts.map((article) => <Article key = {article.id} title = {article.title} date = {article.date} preview = {article.preview} minutes = {article.minutes}/>)
  //console.log(articleArr)
  return <main>{post}</main>
}

export default ArticleList;