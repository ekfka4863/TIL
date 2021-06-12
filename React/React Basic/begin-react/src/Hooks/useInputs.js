import React, {useState, useCallback} from 'react';

function useInputs(initialForm) {
	const [form, setForm] = useState(initialForm);

	const onChange = useCallback(e => {
		const {name, value} = e.target;

		setForm(form => 
			({...form,      // 기존의 form들을 가져오기 위한... 
				[name]: value
			})
		)
	}, [])   // props
}

export default useInputs;