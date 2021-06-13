// import React, {createContext, useContext} from 'react'; 

// function Child({text}) {
// 	return <div>안녕하세요? {text}</div>
// }

// function Parent({text}) {
// 	return <Child text={text} />
// }

// function GrandParent({text}) {
// 	return <Parent text={text} />
// }

// function ContextSample() {
// 	return <GrandParent text="Good" />
// }

// export default ContextSample; 


// ------------------------------ //

import React, {createContext, useContext, useState} from 'react'; 

const MyContext = createContext('defaultValue');   // Context를 생성해주고 ... 


function Child() {
	const text = useContext(MyContext);      // useContext라는 리액트 내장함수를 활용해서 MyContext를 여기서 사용해주겠다고 해주면 된다 

	return <div>안녕하세요? {text}</div>
}

function Parent() {
	return <Child />
}

function GrandParent() {
	return <Parent />
}

function ContextSample() {
	const [value, setValue] = useState(true);   // useState를 사용. 기본값은 true.

	return (
		<MyContext.Provider value={value ? 'GOOD' : 'BAD'}>    
			<GrandParent />
			<button onClick={ () => setValue(!value)}>CLICK ME</button>
		</MyContext.Provider>	
	)
}

export default ContextSample; 

// ------------------------------ //



// ------------------------------ //
