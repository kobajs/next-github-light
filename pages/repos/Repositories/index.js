import React from "react";
import { connect } from "react-redux";
import Router from 'next/router';

import * as Styled from "./Repositories.styles";

import { formattedDate, timeFromNow } from "../../../src/lib/moment";
import IssueIcon from "../../../static/issue.svg";
import ForkIcon from "../../../static/fork.svg";
import StargazerIcon from "../../../static/stargazer.svg";
import WatchIcon from "../../../static/watch.svg";
import { ROUTES } from "../../../src/router/routes";

function Repositories({ user, repositories }) {
  function goToCommits(repo) {
    Router.push({
      pathname: ROUTES.COMMITS,
      query: {
        user: user,
        repo,
      }
    })
  }

  function renderIndicator(Icon, text) {
    return (
      <Styled.Indicator>
        <Icon />
        <p>{text}</p>
      </Styled.Indicator>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <h3>Repositories</h3>
      <Styled.List>
        {repositories.items.map(r => (
          <Styled.Card key={r.id} onClick={() => goToCommits(r.name)}>
            <Styled.Info>
              <Styled.Title>
                {r.owner.login} / <strong>{r.name}</strong>
              </Styled.Title>
              <p>{r.description}</p>
              <p>{r.language}</p>
              <p>Created At: {formattedDate(r.created_at)}</p>
              <p>Last commit: {timeFromNow(r.updated_at)}</p>
              {r.homepage && <a href={r.homepage}>{r.homepage}</a>}
            </Styled.Info>
            <Styled.Indicators>
              {renderIndicator(IssueIcon, r.open_issues)}
              {renderIndicator(ForkIcon, r.forks)}
              {renderIndicator(WatchIcon, r.watchers)}
              {renderIndicator(StargazerIcon, r.stargazers_count)}
            </Styled.Indicators>
          </Styled.Card>
        ))}
      </Styled.List>
    </div>
  );
}

const mapStateToProps = ({ repositories }) => ({ repositories });

export default connect(mapStateToProps)(Repositories);
