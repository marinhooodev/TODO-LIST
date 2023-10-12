
import InputBox from "./components/InputBox.jsx"



const TodoBox = () => {
  return (
    <>
      <section id="mainBox">
        <div id="toDoBox">
          <h1>todo List</h1>
          <div id="todoContent">

            <InputBox />

          </div>
        </div>
      </section>
    </>
  );
};

export default TodoBox;
