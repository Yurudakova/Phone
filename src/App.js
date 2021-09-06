import TodoList from "./Components/TodoList";
import styles from  './App.module.css'
import MainMenu from './Components/MainMenu';


function App() {
const todos = ['А', 'Б', 'С', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н','О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь']

  const items = [
    {title: 'А'}, 
    {title: 'Б'}, 
    {title: 'В', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}]}, 
    {title: 'Г'}, 
    {title: 'Д'}, 
    {title: 'Е'}, 
    {title: 'Ё'}, 
    {title: 'Ж', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}]}, 
    {title: 'З'},
    {title: 'И'}, 
    {title: 'Й'}, 
    {title: 'К', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}]}, 
    {title: 'Л', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}]}, 
    {title: 'М', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}]}, 
    {title: 'Н'}, 
    {title: 'О'}, 
    {title: 'П'}, 
    {title: 'Р'}, 
    {title: 'С'},
    {title: 'Т'}, 
    {title: 'У'}, 
    {title: 'Ф'}, 
    {title: 'Х'}, 
    {title: 'Ц'}, 
    {title: 'Ч'}, 
    {title: 'Ш'}, 
    {title: 'Щ'}, 
    {title: 'Ь'}];

  return (
      <div className = {styles.wr}>
        <MainMenu todos={items}/>
      </div>
  );
  // <TodoItem title='Мой заголовок'/>
}

export default App;
