import React from "react";
import { connect } from "react-redux";

function Repositories(props) {
  const { repositories } = props;
  console.log(repositories)

  return (
    <div>
      <h5>Repositories</h5>
      {/* {repositories.data.map(r => (
        <div key={r.id}>
          <p>{r.id}</p>
          <p>{r.node_id}</p>
          <p>{r.created_at}</p>
          <p>{r.updated_at}</p>
          <p>{r.name}</p>
          <p>{r.description}</p>
          <p>{r.language}</p>
          <p>{r.open_issues}</p>
          <p>{r.open_issues_count}</p>
          <p>{r.forks}</p>
          <p>{r.forks_count}</p>
          <p>{r.homepage}</p>
        </div>
      ))} */}
    </div>
  );
}

const mapStateToProps = ({ repositories }) => ({ repositories });

export default connect(mapStateToProps)(Repositories);
