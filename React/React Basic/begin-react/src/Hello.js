import React from 'react';

function Hello({color, name, isSpecial}) { // props로 받는 값들을 파라미터로... 
  return (
    <div style={{
      color: color
    }}>
      {isSpecial ? <b>*</b> : null}
      안녕하세요, {name}
    </div>
  )
}

Hello.defaultProps = {   
  name: '이름 없음'
};

export default Hello;