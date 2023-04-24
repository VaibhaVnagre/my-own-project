import logo from './logo.svg';
import './App.css';
import AddUser from './Component/User/AddUser';
import UserList from './Component/User/UsersList';

function App() {
  return (
    <div className="App">
     <AddUser/>
     <UserList user={[]}></UserList>
    </div>
  );
}

export default App;
