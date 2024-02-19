import "./Body.css";
import potion from "../../asets/faceA.png";

function Body() {
  return (
    <>
      <div>
        <img src={potion} alt="potion" />
        <section>
          <p>
            Welcome to our mystical online emporium, where magic awaits at every
            click. Step into a realm of enchantment and explore our collection
            of potent potions crafted by the most skilled alchemists. Whether
            you seek to unlock hidden powers, heal ailments, or simply indulge
            in the wonders of the arcane, you have come to the right place. Join
            us on this extraordinary journey and let the magic unfold!
          </p>
          <div className="button-content-A">
            <button className="button-A">Make an Order</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Body;
