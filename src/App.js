import Video from './pages/Video';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={111}
          messages={222}
          shares={333}
          name='Paulo'
          description='Brecker o goleiro'
          music='msuica épica'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74'
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name='Paulo'
          description='Brecker o goleiro'
          music='msuica épica'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74'
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name='Paulo'
          description='Brecker o goleiro'
          music='msuica épica'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74'
        />
      </div>
    </div>
  );
}

export default App;
