import React from "react";
import { connect } from "react-redux";

import * as Styled from "./Commits.styles";
import { timeFromNow } from "../../../src/lib/moment";

function Commits({ commits }) {
  function goToGithubCommitPage(url) {
    window.open(url);
  }

  return (
    <div style={{ width: "100%" }}>
      <h3>Commits</h3>
      <Styled.List>
        {commits.items.map(c => (
          <Styled.Card
            key={c.node_id}
            onClick={() => goToGithubCommitPage(c.html_url)}
          >
            <p>{c.commit.message}</p>
            <Styled.RightInfo>
              {c.author && <Styled.Avatar src={c.author.avatar_url} />}
              <p>
                <strong>
                  {(c.author && c.author.login) || c.commit.author.email}
                </strong>{" "}
                {timeFromNow(c.commit.author.date)}
              </p>
            </Styled.RightInfo>
          </Styled.Card>
        ))}
      </Styled.List>
    </div>
  );
}

const mapStateToProps = ({ commits }) => ({ commits });

export default connect(mapStateToProps)(Commits);
