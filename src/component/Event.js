export default function Event (){

  function showName(){
    alert('showName!!')
  };

  function showAge(age){
    alert(age)
  };

  function showTxt(e){
    alert(e.target.value)
  };


  return(
    <div>
      <h1>이벤트 처리</h1>
      <button onClick={showName}>ShowName</button>

      <button onClick={() => {
        showAge(30);
      }}>ShowAge</button>

      <input type="text" onChange={showTxt} />
    </div>
  )
};