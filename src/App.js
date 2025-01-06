import './App.css';
import ChaComponent from './Component/ChaComponent';
import AvtComponent from './Component/avt';
import BT1 from './Component/BT1';
import BT2 from './Component/BT2';
import Day4 from './Component/Day4';

const NewComponent = () => {
  return(<h1>Real Madrid</h1>)
}
// Alt + Shift + O : Xóa Component đã Import nhưng không dùng đến.
// rafce : Tạo component mới.
function App() {

  const log = ()=>{
    alert("Hi NTD");
  }

  return (
    <div className="App">
      <AvtComponent></AvtComponent>
      <button onClick={log}>Click Me</button>
      <NewComponent></NewComponent>
      <ChaComponent></ChaComponent>
      <ul>
        <BT1 title="UI/UX Design" h1="Contrary to popular belief" icon="•♦︎"></BT1>
        <BT1 title="Web Development" h1="There are many variations of passages of Lorem Ipsum available" icon="•♥︎"></BT1>
        <BT1 title="Branding" h1="Contrary to popular belief, Lorem Ipsum is not simply random text" icon="•♣︎"></BT1>
        <BT1 title="Photography" h1="Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird" icon="•♦︎"></BT1>
        <BT1 title="UI/UX Design" h1="Contrary to popular belief" icon="•♦︎"></BT1>
        <BT1 title="UI/UX Design" h1="Contrary to popular belief" icon="•♦︎"></BT1>
      </ul>
      <BT2 ></BT2>
      <Day4>
        <h1>Hello Word</h1>
      </Day4>
    </div>
  );
}

export default App;
