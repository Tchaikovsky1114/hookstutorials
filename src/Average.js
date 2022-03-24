import React, { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if(numbers.length === 0) return 0
    const sum = numbers.reduce((a,b) => a+ b)
    return sum / numbers.length
}


const Average = () => {
    const [list,setList] = useState([]);
    const [number,setNumber] = useState('');
    //onChange함수는 컴포넌트가 처음 랜더링 될 때만 함수를 생성하고 이후는 재활용
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[])
    //onInsert 함수는 number와 list가 바뀔때만 함수 생성
    const onInsert = useCallback(e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number,list])
    const avg = useMemo(() => getAverage(list),[list])
    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) =>(<li key={index}>{value}</li>))}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    );
};

export default Average;