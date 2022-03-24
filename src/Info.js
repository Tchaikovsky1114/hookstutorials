import React, { useState } from 'react';
import { useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname,setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e =>{
        setNickname(e.target.value)
    }
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!')
        console.log({
            name,
            nickname
        });
        return () =>{
            console.log('cleanup');
            console.log(name);
        }
    },[])
    return (
        <div>
            <div>
        <input value={name} onChange={onChangeName}type="text" />        
        <input value={nickname} onChange={onChangeNickname}type="text" />        
        </div>
        <div>
            <b>이름:</b>{name}
            
        </div>
        <div>
        <b>닉네임:</b>{nickname}
        </div>
        </div>
    );
};

export default Info;