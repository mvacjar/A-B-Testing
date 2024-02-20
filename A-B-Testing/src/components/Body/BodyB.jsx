import "./Body.css";
import potion from "../../asets/faceA.png";

function BodyB({ handleClick }) {
  return (
    <>
      <div>
        <section>
          <p className="text-B">
            Welcome to our mystical online emporium, where magic awaits at every
            click. Step into a realm of enchantment and explore our collection
            of potent potions crafted by the most skilled alchemists. Whether
            you seek to unlock hidden powers, heal ailments, or simply indulge
            in the wonders of the arcane, you have come to the right place. Join
            us on this extraordinary journey and let the magic unfold!
          </p>
          <img src={potion} alt="potion" />

          <div className="button-content-B">
            <button className="button-B" onClick={handleClick}>
              Make an Order
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
export default BodyB;
