import './App.css';
import Box from "./component/Box"

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위,바위,보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3,4번의 결과를 비교, 누가 이겼는지 승패 따짐
// 6. 승패 결과에 따라 테두리 색 바뀜(이기면-초록, 지면-빨강, 비기면-검정)

function App() {
  

  return (
    <div>
      <div className="main">
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      
      

      <div className="main">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
      {/* <Box user="you" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwLvDG1Zgl3hsxUzfSx-xmAPOjw2BpJ9N5Q&s"/>
      <Box user="computer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png"/> */}
    </div>
  );
}

export default App;
