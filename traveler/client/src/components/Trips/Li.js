import React, { Component } from "react";

const styles = {
    li: {
        border: "1px solid black",
        borderRadius: "5px",
        textAlign: "center",
        margin: "3px",
        marginTop: "10px",
        marginBottom: "5px",
        background: "black",
        color: "white",
        fontWeight: "normal",
        fontSize: "20px",
        boxShadow: "1px 3px 8px 1px #888888"
      },
      ulNest: {
        marginRight: "25px"
      },
      liNest: {
        border: "2px solid black",
        borderRadius: "5px",
        // textAlign: "center",
        margin: "3px",
        // background: "black",
        // color: "white",
        fontWeight: "normal",
        fontSize: "20px",
        listStyleType: "none",
        paddingLeft: "10px",
        boxShadow: "1px 3px 8px 1px #888888"
      },
      span: {
        // textAlign: "left"
        float: "left",
        // marginLeft: "10px",
        marginTop: "3px",
        marginRight: "10px"
      }
}

class Li extends Component {
    render () {
        return(
            <div className="row">
                <ul className="col-md-4">
                <li style={styles.li}>Central Park</li>
                <ul style={styles.ulNest}>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-calendar-check-o"
                    />8/18/18 6pm
                  </li>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-map-marker"
                    />Central Park, New York, NY
                  </li>
                </ul>
                <li style={styles.li}>Art Show</li>
                <ul style={styles.ulNest}>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-calendar-check-o"
                    />8/20/18 10pm
                  </li>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-map-marker"
                    />530 W 25th St, New York, NY 10001
                  </li>
                </ul>
                <li style={styles.li}>Concert</li>
                <ul style={styles.ulNest}>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-calendar-check-o"
                    />Tomorrow
                  </li>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-map-marker"
                    />At The Place
                  </li>
                </ul>
                </ul>
                <ul className="col-md-4">
                    <li style={styles.li}>Park Central Hotel</li>
                    <ul style={styles.ulNest}>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-calendar-check-o"
                    />08/15/18 6pm
                  </li>
                  <li style={styles.liNest}>
                    <span
                      style={styles.span}
                      className="fa fa-map-marker"
                    />870 7th Ave, New York, NY 10019
                  </li>
                </ul>
                </ul>
                <ul style={styles.ul} className="col-md-4">
                    <li style={styles.li}>Carmine's Italian Restaurant</li>
                    <ul style={styles.ulNest}>
                    <li style={styles.liNest}>
                        <span
                        style={styles.span}
                        className="fa fa-calendar-check-o"
                        />08/17/18 5pm
                    </li>
                    <li style={styles.liNest}>
                        <span
                        style={styles.span}
                        className="fa fa-map-marker"
                        />200 W 44th St, New York, NY 10036
                    </li>
                    </ul>
                    <li style={styles.li}>Niles New York City</li>
                    <ul style={styles.ulNest}>
                        <li style={styles.liNest}>
                            <span
                            style={styles.span}
                            className="fa fa-calendar-check-o"
                            />08/21/18 6pm
                        </li>
                        <li style={styles.liNest}>
                            <span
                            style={styles.span}
                            className="fa fa-map-marker"
                            />371 7th Ave, New York, NY 10001
                        </li>
                    </ul>
                </ul>
            </div>
        )
    }
}

export default Li;