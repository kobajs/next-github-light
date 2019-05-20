import React from "react";
import { connect } from "react-redux";

import * as Styled from "./UsersList.styles";
import UserItem from "./UserItem";

function UsersList({ users }) {
  function renderList() {
    return users.items.map(user => <UserItem key={user.id} {...user} />);
  }

  return (
    <div>
      <Styled.TotalCount>Total: {users.total_count}</Styled.TotalCount>
      <Styled.List>{renderList()}</Styled.List>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(UsersList);
