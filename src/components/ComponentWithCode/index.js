import React from 'react';

const ComponentWithCode = ({ user, hasThis, hasThat }) => (
  <div>
    <h4>{user ? user.name : 'no user found'}</h4>
    <div className="shit">
      {hasThis && (
        <div className="shit__this">
          This user has this
        </div>
      )}

      {hasThat && (
        <div className="shit__that">
          This user has that
        </div>
      )}

      <table className="container">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Account Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.accountNumber}</td>
            <td>{user.accoutName}</td>
            <td>{user.accountActive}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export { ComponentWithCode };
