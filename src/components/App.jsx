import React from "react";
import {AppRoute} from "../settings.js"
import GamePage from "./GamePage.jsx";
import ResultsPage from "./ResultsPage.jsx"
import InitialPage from "./InitialPage.jsx"

function App({ results, getImages}) {
  const [page, setPage] = React.useState(AppRoute.Initinal);
  const [result, setResult] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [theme, setTheme] = React.useState(null)

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };
  const handleReset = () => {
    setPage(AppRoute.Initinal)
  }
  const handleStart = (type) => {
    setTheme(type);
    setImages(getImages(type));
    setPage(AppRoute.Game);
  };
  const getPage = (route) => {
    switch (route) {
      case AppRoute.Game:
        return <GamePage images={images} onShowResults={showResults} theme={theme}/>;
      case AppRoute.Results:
        return (
          <ResultsPage
            stepsCount={result}
            onResetGame={handleReset}
            results={results}
          />
        );
      case AppRoute.Initinal:
        return <InitialPage onStartGame={handleStart}/>
      default:
        return null;
    }
  };
  return getPage(page);
}

export default App;