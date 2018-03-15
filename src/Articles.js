import React from 'react';
import { Link } from 'react-router-dom';

import './articles.css';

const Articles = (props) => (
	<div className="row no-gutters">
		{props.articles.map(article => 
			<div className="col-md-4 col-12 article">
				<Link to={article.title.toLowerCase()}>
					<div className="article-content">
						<i className={article.icon +" fa-10x"}></i>
						<h1 className="title">{article.title}</h1>
						<p>{article.content}</p>
					</div>
				</Link>
			</div>
		)}
	</div>
)

export default Articles;
