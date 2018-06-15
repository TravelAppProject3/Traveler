import React from "react";

const styles = {
  card: {
    width: "18rem",
    margin: 20
  }
};
const Hotels = props => (
  <div className="row">
    <div className="col-md-3">
      <div className="card" style={styles.card}>
        <img
          className="card-img-top"
          src="http://ronghuhotel.info/wp-content/uploads/2018/01/hotls-rodents-in-hotels-rodrepel-blogs.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="row justify-content-center">
            <h2 className="card-title ">Hotel Name</h2>
            <p className="card-text">Hotel address</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price Ranking</li>
            <li className="list-group-item">
              <i class="fas fa-thumbs-up">100</i>
              <i class="fas fa-thumbs-down">50</i>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <button type="button" className="btn btn-dark">
              Add to My Path
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hotels;
