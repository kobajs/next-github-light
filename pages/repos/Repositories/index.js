import React from "react";
import { connect } from "react-redux";

import * as Styled from "./Repositories.styles";

import { formattedDate, timeFromNow } from "../../../src/lib/moment";
import IssueIcon from "../../../static/issue.svg";
import ForkIcon from "../../../static/fork.svg";
import StargazerIcon from "../../../static/stargazer.svg";
import WatchIcon from "../../../static/watch.svg";

function Repositories({ username, repositories }) {
  function renderIndicator(Icon, text) {
    return (
      <Styled.Indicator>
        <Icon />
        <caption>{text}</caption>
      </Styled.Indicator>
    );
  }
  return (
    <div style={{ width: "100%" }}>
      <h3>Repositories</h3>
      <Styled.List>
      {repositories.data.map(r => (
        <Styled.Card key={r.id}>
          <Styled.Info>
            <Styled.Title>
              {username} / <strong>{r.name}</strong>
            </Styled.Title>
            <p>{r.description}</p>
            <p>{r.language}</p>
            <p>Created At: {formattedDate(r.created_at)}</p>
            <p>Last commit: {timeFromNow(r.updated_at)}</p>
          </Styled.Info>
          <Styled.Indicators>
            {renderIndicator(IssueIcon, r.open_issues)}
            {renderIndicator(ForkIcon, r.forks)}
            {renderIndicator(WatchIcon, r.watchers)}
            {renderIndicator(StargazerIcon, r.stargazers_count)}
          </Styled.Indicators>
          {/* <p>{r.homepage}</p> */}
        </Styled.Card>
      ))}
      </Styled.List>
    </div>
  );
}

const mapStateToProps = ({ repositories }) => ({ repositories });

export default connect(mapStateToProps)(Repositories);
