import React from 'react';
import RecipeList from './RecipeList';
import RecipeDesc from './RecipeDesc'
import RecipeEdit from './RecipeEdit'

class App extends React.Component {
    render() {
        return (
            <div>
                App.js
                <ul>
                    <li><RecipeList /></li>
                    <li><RecipeDesc /></li>
                    <li><RecipeEdit /></li>
                </ul>
            </div>    
        );
    }
}

export default App;