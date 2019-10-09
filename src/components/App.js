import React from "react";
import RecipeList from "./RecipeList";
import RecipeDesc from "./RecipeDesc";
import RecipeEdit from "./RecipeEdit";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
        <RecipeList />
        <RecipeDesc />
      </div>
    );
  }
}

export default App;
