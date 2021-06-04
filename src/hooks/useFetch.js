import { useEffect, useState } from 'react';

//외부로 부터 URL을 매개변수로 받음
export default function useFetch(url){
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    //외부로 부터 URL을 매개변수로 받음
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setDatas(data)
    })
  }, [datas])

  //datas값을 셋팅 후 리턴
  
  return datas
}