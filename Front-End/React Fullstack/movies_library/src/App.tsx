import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { moviesType } from "./types/moviesType";
import SearchResults from "./components/SearchResults";

// eslint-disable-next-line react-refresh/only-export-components
export const searchContext = createContext<{
  searchedMovies: moviesType[];
  setSearchedMovies: (searchedMovies: moviesType[]) => void;
}>({
  searchedMovies: [],
  setSearchedMovies: () => [],
});

const App = () => {
  const [searchedMovies, setSearchedMovies] = useState<moviesType[]>([]);

  return (
    <searchContext.Provider value={{ searchedMovies, setSearchedMovies }}>
      <div className="App">
        <Header />
        <HeroSection />
        {searchedMovies.length > 0 && (
          <SearchResults searchedMovies={searchedMovies} />
        )}
      </div>
    </searchContext.Provider>
  );
};

export default App;
