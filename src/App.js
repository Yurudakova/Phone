import TodoList from "./Components/TodoList";
import styles from  './App.module.css'


function App() {
const todos = ['А', 'Б', 'С', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н','О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь']

  return <div className = {styles.wr}><TodoList todos={todos}/></div>
  // <TodoItem title='Мой заголовок'/>
}

export default App;
