import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    // mount, unmount, update 시.
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);

        return () => {
            // unmount 시 실행(= cleanup 함수)
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);
    // deps 배열을 비우게 되면 mount 시에만 해당 함수 호출
    // deps 파라미터를 생략하면 컴포넌트가 리렌더링 될때마다 호출됨 (성능저하)

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black',
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>{' '}
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);
