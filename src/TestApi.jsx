import axios from "axios";

const TestApi = () => {
  function fetchData() {
    // API 요청을 보내는 함수 (async : 비동기 함수)
    axios // axios 라이브러리를 사용하여 API 요청을 보냄
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10") // get 메서드를 사용하여 데이터를 가져옴
      .then((response) => {
        // then 메서드를 사용하여 응답 데이터를 출력
        console.log("데이터:", response.data);
      })
      .catch((error) => {
        // catch 메서드를 사용하여 예외 처리
        console.error("에러:", error);
      });
  }

  fetchData(); // 함수 호출
};

export default TestApi;
