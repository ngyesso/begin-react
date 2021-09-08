import React, { useRef, useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;

  /**
   * 리액트 상태에서 객체를 수정해야 할 때에는
   * inputs[name] = value; ----> 값을 바꿔도 리렌더링 안됨.
   * 이런식으로 직접 수정하면 안됨.
   * 그 대신에 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해줘야 함 (=불변성을 지킨다)
   */
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존 inputs 객체 복사
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
