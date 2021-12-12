import './App.css';
import Search from '../src/components/Search/Search';
/*
TODO:
1. Components:
    a. Pagination
    b. Search component with a cancel request UI
    c. List & Card
    d. Input
2. Add Redux

DONE:
1. Project setup
    a. Create react app
    b. Update node modules
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
