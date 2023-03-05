import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./Constant";
/**
 * Header
 *   -Logo
 *   -Nav Items
 *   -Cart items
 * Body
 * -Search bar
 * -Restaurant List-
 *   -Resatuarnt List
 *      -Image
 *      -Name
 *      -Rating
 *     - Cuisines
 * footer
 *   -Links
 *   -copyright
 *
 */

// JSX(Babel)=>React.CreateElement=>Object=>Html(DOM)
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Footer = () => {
  return <h4>Footer</h4>;
};
// const restaurantList = [
//   {
//     name: "Burger King",
//     image:
//       "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
//     Cusines: ["Burger", "American"],
//     rating: "4.2",
//   },
// ];

const ResatuarntCard = (
  { cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString } //props destructuring
) => {
  // console.error(props.restaurant.data);
  // const { cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          cloudinaryImageId
        }
      />
      {/* <h2>{restaurant.data?.name}</h2>  Before Destructuring*/}
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      <h5>{lastMileTravelString} minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
      {/* <ResatuarntCard {...restaurantList[0].data} />

      <ResatuarntCard
        cloudinaryImageId={restaurantList[1].data.cloudinaryImageId}
        name={restaurantList[1].data.name}
        cuisines={restaurantList[1].data.cuisines}
        avgRating={restaurantList[1].data.avgRating}
        lastMileTravelString={restaurantList[1].data.lastMileTravelString}
      /> */}

      {restaurantList.map((restaurant) => {
        return <ResatuarntCard {...restaurant.data} />;
      })}

      {/* <ResatuarntCard restaurant={restaurantList[1].data} /> */}
      {/* <ResatuarntCard restaurant={restaurantList[2]} />
      <ResatuarntCard restaurant={restaurantList[3]} />
      <ResatuarntCard restaurant={restaurantList[4]} />
      <ResatuarntCard restaurant={restaurantList[5]} /> */}
    </div>
  );
}; // TODO header
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
