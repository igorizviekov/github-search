import './App.css';
import Search from '../src/components/Search/Search';
/*
TODO:
1. Add Pagination Component
2. Add search component with a cancel request UI
3. Add List and Card Components
4. Add Redux

DONE:
1. Project setup
    a. Create react app
    b. update node modules
    c. Prettier
    d. Eslint
    e. SCSS
    f. Readme
    g. Git

2. Folder & Component set up
    - Search
      - List
        - Card
*/

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
