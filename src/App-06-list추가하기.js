import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')

  const [movies, setMovies] = useState([
    { id: "m1", title: "인사이드아웃2", year: 2024 },
    { id: "m2", title: "범죄도시4", year: 2024 },
    { id: "m3", title: "설계자", year: 2024 },
  ])

  let i = 1
  const movieList = movies.map((movie) => (
    <Movie key={'m'+ i++} title={movie.title} year={movie.year} />
  ))

  useEffect(() => (console.log("실행됨")))

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([
      ...movies,
      {title: movieTitle , year: movieYear}
    ])
    setMovieTitle('');
    setMovieYear('');
   }


  return (
    <div>
      <h1>영화리스트 추가하기</h1>
      {movieList}

      <form onSubmit={addMovie}>
        <input
          type='text'
          placeholder='영화제목을 입력하세요'
          value={movieTitle}
          onChange={(e) => { setMovieTitle(e.target.value) }}
        />
        <input
          type='text'
          placeholder='연도를 입력하세요'
          value={movieYear}
          onChange={(e) => { setMovieYear(e.target.value) }}
        />
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}

export default App