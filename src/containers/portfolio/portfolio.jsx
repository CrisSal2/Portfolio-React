import React, { useState, useEffect } from 'react';
import './portfolio.css'

function Portfolio() {
    const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/crissal2/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  return (
    <div className="repo-container">
      <h2>My GitHub Projects</h2>
      <div className="repo-cards">
        {repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;