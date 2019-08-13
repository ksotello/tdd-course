import React from 'react';

const UserInfoContainer = ({ user }) => user ?  <div>{user.name}</div> : null;

export { UserInfoContainer };
