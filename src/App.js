import Profile from "./Profile/Profile";


function App(props) {

  return (

    <div className="App-wrapper">

      <div className='App-wrapper-contet'>
        <Profile state={props.stateData.profilePage} addPost={props.addPost} />
      </div>
    </div>

  );
}

export default App;
