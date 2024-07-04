import './App.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import data from './data';
import Profiles from './Profiles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main data={data.PostPage.posts}/>}/>
          <Route path='/profile' element={<Profiles data={data.ProfilePage.users}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
