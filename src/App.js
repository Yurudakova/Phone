import styles from  './App.module.css';
import MainMenu from './Components/MainMenu';


function App() {
  const items = [
    {title: 'А', page: 1}, 
    {title: 'Б', page: 1}, 
    {title: 'В', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}], page: 1}, 
    {title: 'Г', page: 1}, 
    {title: 'Д', page: 1}, 
    {title: 'Е', page: 1}, 
    {title: 'Ё', page: 1}, 
    {title: 'Ж', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}], page: 1}, 
    {title: 'З', page: 1},
    {title: 'И', page: 1}, 
    {title: 'Й', page: 1}, 
    {title: 'К', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}], page: 1}, 
    {title: 'Л', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}], page: 1}, 
    {title: 'М', children: [{title: 'F'}, {title: 'G'}, {title: 'S'}, {title: 'K'}, {title: 'J'}, {title: 'W'}, {title: 'I'}, {title: 'Y'}, {title: 'R'}], page: 2}, 
    {title: 'Н', page: 2}, 
    {title: 'О', page: 2}, 
    {title: 'П', page: 2}, 
    {title: 'Р', page: 2}, 
    {title: 'С', page: 2},
    {title: 'Т', page: 2}, 
    {title: 'У', page: 2}, 
    {title: 'Ф', page: 2}, 
    {title: 'Х', page: 2}, 
    {title: 'Ц', page: 2}, 
    {title: 'Ч', page: 2}, 
    {title: 'Ш', page: 2}, 
    {title: 'Щ', page: 2}, 
    {title: 'Ь', page: 2}];

const pageCount = items.reduce ((acc, curr)=>{
      acc.add(curr.page)
      return acc;
    },new Set()).size

  return (
      <div className = {styles.wr}>
        <MainMenu todos={items}/>
      </div>
  );
  // <TodoItem title='Мой заголовок'/>
}

export default App;
