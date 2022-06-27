import { useState } from "react";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }
  return (
    <div
      tabIndex={card.id}
      className={cn("flip-card-outer", {
        "focus-trigger": card.variant === "focus"
      })}
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body   align-items-center">
            <img src={card.imageName} height="100px" />
            <p className="card-text">{card.universityName}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body  align-items-center">
            <p className="card-text" style={{ fontSize: '11px' }}>{card.backTile}</p>
            <a href={card.universityWebsite} target="_blank">
              <button> More Info </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;