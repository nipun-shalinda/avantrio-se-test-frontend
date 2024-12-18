import logo from './logo.svg';
import './App.css';
import CreateStory from './CreateStory';
import axios from 'axios';


function App() {

  const [emojiStory, setEmojiStory] = useState([])
  const [translation, settranslation] = useState([])

  const apiUrl = 'http://localhost:3000/api/stories'

  const handletranslation = () => {

  }

  const createTranslation  =  async () => {
    await axios.port('')
  }
  return (
    <div className="App">
      <CreateStory/>
    </div>
  );
}

export default App;
