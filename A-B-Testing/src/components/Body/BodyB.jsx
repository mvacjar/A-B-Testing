import "./Body.css";
import postal from "../../asets/faceB.png";

function Body() {
  return (
    <>
      <div>
        <img src={postal} alt="potion" />
        <section>
          <p>
            Greetings, traveler. It seems you have stumbled upon our mystical
            corner of the web. While we would love to share our treasures with
            you, access to our exclusive collection of potions requires a
            special invitation. Fear not, for if you yearn to partake in the
            mysteries held within these digital walls, simply send us a postcard
            with your request, and perhaps the winds of fate will carry an
            invitation to your doorstep. Until then, may your travels be filled
            with wonder and adventure.
          </p>
          <div className="button-content-B">
            <button className="button-B">Make an Order</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Body;
