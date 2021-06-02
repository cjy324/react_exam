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
      <button onClick={showName}>ShowName</button>

      <button onClick={() => {
        showAge(30);
      }}>ShowAge</button>
      
      <input type="text" onChange={showTxt} />
    </div>
  )
};