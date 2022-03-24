import React, { useReducer } from 'react';

function reducer(state,action){
    return{
        ...state,
        [action.name]: action.value
    
    };
}

const ReducerInfo = () => {
    const [state,dispatch] = useReducer(reducer,{
        name:'',
        nickname: '',
        phone: ''
    })
    const {name, nickname,phone,address,email} = state;
    const onChange = e => {
        dispatch(e.target);
    }
    return (
        <div>
            <form action="">
            <input name="name" value={name} onChange={onChange} type="text" />
            <input name="nickname" value={nickname} onChange={onChange} type="text" />
            <input name="phone" value={phone} onChange={onChange} type="number" />
            <input name="address" value={address} onChange={onChange} type="address" />
            <input name="email" value={email} onChange={onChange} type="email" />
            </form>
            <div>
                <b>이름</b>: {name}
                <b>닉네임</b>: {nickname}
                <b>핸드폰번호</b>: {phone}
                <b>주소</b>: {address}
                <b>이메일</b>: {email}
            </div>
        </div>
    );
};

export default ReducerInfo;