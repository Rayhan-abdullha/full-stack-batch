import ExampleSix from './components/ExampleSixe'
import MyContext from './context/Context'
// import ExampleFour from './components/ExampleFour'
// import Button from './components/Button';
// import Copied from './components/Copied';
// import ExampleOne from './components/ExampleOne';
// import ExampleThree from './components/ExampleThree';
// import ExampleTwo from './components/ExampleTwo';
// import Switcher from './components/Switcher';
const App = () => {
  return (
      <MyContext>
      {/* <ExampleFour/> */}
      <ExampleSix/>
    </MyContext>
  )
}

export default App