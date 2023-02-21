import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE } from "../redux/action/favoriteAction";
import No_image from "../images/no_image.jpg";

const Favorites = () => {
  const favoriteHomesData = useSelector(
    (state) => state.favoriteHomes.favorites
  );

  console.log(favoriteHomesData);
  const dispatch = useDispatch();

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        Cart Page
      </h1>

      <div className="table-container">
        <table className="table table-striped table-hover">
          <thead className="table-heading">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product details</th>
              <th scope="col">Remove Product</th>
            </tr>
          </thead>
          <tbody>
            {favoriteHomesData.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">
                    <div className="img-container">
                      <img
                        className="fav-img"
                        src={
                          item.coverPhoto ? item.coverPhoto.url : `${No_image}`
                        }
                        alt=""
                      />
                    </div>
                  </th>

                  <td>
                    <div>
                      <p> Name : {item.title}</p>
                      <p>Price : {item.price}</p>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: REMOVE, payload: item.id })
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Favorites;
