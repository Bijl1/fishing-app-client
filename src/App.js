// ... (Previous code)

import EditLureForm from './components/EditLureForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Fishing App</h1>
        <Link to="/lures">Lure List</Link>
        <Switch>
          <Route exact path="/lures" component={LureList} />
          <Route exact path="/lures/add" component={LureForm} />
          <Route exact path="/lures/:id/edit" component={EditLureForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
