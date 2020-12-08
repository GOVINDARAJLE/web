import React from "react";
import { Card, Feed, FeedContent } from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Panel = () => (
  <Card>
    <Card.Content>
      <Card.Header children="card">Faut ID</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Card.Header>FID 201204_VID_01</Card.Header>
        <Feed.Content>
          <Feed.Summary>
            <a>T&D Lines MOhindergarh</a>
          </Feed.Summary>
        </Feed.Content>
        <hr></hr>
        <Card.Header>FID 201204_VID_02</Card.Header>
        <Feed.Content>
          <Feed.Summary>
            <a>Rusting of Frame.</a>
          </Feed.Summary>
        </Feed.Content>
        <hr></hr>
        <Card.Header>FID 201204_VID_03</Card.Header>
        <Feed.Content>
          <Feed.Summary>
            <a>Loose Nut and bolt.</a> 
          </Feed.Summary>
        </Feed.Content>
        <hr></hr>
        <Card.Header>FID 201204_VID_04</Card.Header>
        <Feed.Content>
          <Feed.Summary>
           <a>Conductor</a> 
          </Feed.Summary>
        </Feed.Content>
        <hr></hr>
      </Feed>
    </Card.Content>
  </Card>
);


export default Panel;
