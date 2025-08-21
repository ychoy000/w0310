import "./App.css";
import { useState } from 'react';
import logo from "./logo.png";

function Movies() {
  const movies = [
    {
      image: "https://img.megabox.co.kr/SharedImg/2025/07/21/PyQHev3OAVz7SGjIbnc6hGIA7GHmqq8g_420.jpg",
      alt: "m4",
      title: '악마가 이사왔다.',
      issue: '빠져든다. 8월 13일 극장 대개봉',
    },
    {
      image: "https://img.megabox.co.kr/SharedImg/2025/07/25/xW9c9qjuflwzzoHf6PPnfWOE5cAF4v4j_420.jpg",
      alt: "m1",
      title: '머티리얼리스트',
      issue: '사랑과 결혼 앞에선 누구나 속물이 된다.',
    },
    {
      image: "https://img.megabox.co.kr/SharedImg/2025/07/25/4fLIzM7kJAnaPCu4ngQJLhgP7ak3GMrs_420.jpg",
      title: "귀멸의 칼날",
      issue: '무한성, 8월 22일 대개봉',
    },
    {
      image: "https://img.megabox.co.kr/SharedImg/2025/08/05/GCFwvyXNbZTEogfoCW4TQNLiBNc5l6Hy_420.jpg",
      title: "좀비딸",
      issue: '우리 애는 안 울어요',
    }
  ];

  return (
    <div className="boxoffice">
      {movies.map((movie) => (
        <MovieCard
          key={movie.rank}
          rank={movie.rank}
          image={movie.image}
          title={movie.title}
          issue={movie.issue}
        />
      ))}
    </div>
  );
}

function MovieCard({image, title, issue }) {
  return (
    <div className="movie-card">
      <img src={image} alt="img" />
      <div class="movie-info">
        <h4>{title}</h4>
        <p className="issue">{issue}</p>
      </div>
    </div>
  );
}

function App() {
   return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="tlogo"> Movie Space</span>
        </div>
        <ul className="gnb">
          <li><a href="#">Movies</a></li>
          <li><a href="#">Series</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <Movies />

      <div className="footer">
        <p>ⓒ2025 MovieSpace. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
