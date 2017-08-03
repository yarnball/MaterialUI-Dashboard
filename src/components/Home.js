import React from "react";
import { typography } from "material-ui/styles";
import {
  grey600,
  cyan400,
  cyan600,
  pink400,
  pink500,
  pink600,
  purple400,
  purple500,
  purple600,
  orange400,
  orange600
} from "material-ui/styles/colors";
import TopBoxes from "./TopBoxes";
import Test from "./Test";
import Graph from "./Graph";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Money from "material-ui/svg-icons/editor/attach-money";
import ThumbUp from "material-ui/svg-icons/action/thumb-up";
import { books, social } from "../config/dummyData.js";

const styles = {
  navigation: {
    fontSize: 20,
    fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingBottom: 5,
    display: "block"
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    padding: 30
  },
  clear: {
    clear: "both"
  },
  loginIcon: {
    borderRadius: 3,
    marginRight: 5,
    opacity: 0.75,
    cursor: "none",
    height: 25
  }
};

export default class Home extends React.Component {
  render() {
    return (
      <div className="innerBody">
        <h3 style={styles.navigation}>
          {" "}This week
          <div
            style={{
              position: "absolute",
              display: "inline-table",
              pointerEvents: "none",
              right: 20
            }}
          >

            <img style={styles.loginIcon} alt='none' src={social.fb} />
             <img style={styles.loginIcon} alt='none' src={social.ggl} />
            <img style={styles.loginIcon} alt='none' src={social.github} />
          </div>
        </h3>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
            <TopBoxes
              Icon={Money}
              title="Value"
              prefix="$"
              value={books.totalItems*0.4}
              iconColor={pink600}
              boxColor={pink400}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <TopBoxes
              Icon={ThumbUp}
              title="Likes"
              value={books.totalItems*0.25}
              iconColor={cyan600}
              boxColor={cyan400}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <TopBoxes
              Icon={Money}
              value={books.totalItems*0.125}
              title="Transfers"
              iconColor={purple600}
              boxColor={purple400}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <TopBoxes
              Icon={Money}
              value={books.totalItems}
              title="New Members"
              iconColor={orange600}
              boxColor={orange400}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <Graph iconColor={purple600} boxColor={purple500} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <Graph1 iconColor={pink600} boxColor={pink500} />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md m-b-15">
            <Test
              data={books.items.slice(0, 6).map((x, index) => {
                return (
                  <div key={index}>
                    {x.volumeInfo.title}
                  </div>
                );
              })}
              title="Title"
              iconColor={pink600}
              boxColor={pink400}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md m-b-15">
            <Test
              data={books.items.slice(0, 6).map((x, index) => {
                return (
                  <div key={index}>
                    {x.volumeInfo.publisher}
                  </div>
                );
              })}
              title="Publisher"
              iconColor={cyan600}
              boxColor={cyan400}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md m-b-15">
            <Test
              title="ID"
              data={books.items.slice(0, 6).map((x, index) => {
                return (
                  <div key={index}>
                    {x.id}
                  </div>
                );
              })}
              iconColor={purple600}
              boxColor={purple500}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <Graph2 color="hello" iconColor={purple600} boxColor={purple500} />
          </div>
        </div>
      </div>
    );
  }
}
