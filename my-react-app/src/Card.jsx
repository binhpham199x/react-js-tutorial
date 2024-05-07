import reactPic from "./assets/react.svg";

function Card() {
   return (
      <div className="card">
         <img
            className="card-img"
            src={reactPic}
            alt="prfile picture"
         ></img>
         <h2 className="card-title">synaigy</h2>
         <p className="card-text">I like programming and weight lifting</p>
      </div>
   );
}

export default Card;
