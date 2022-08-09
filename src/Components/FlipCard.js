import { useState } from "react";
import cn from "classnames";
import { useNavigate } from 'react-router-dom';

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }
  function universityDetails(id){
    console.log(id)
    navigate(`/university/${id}`);
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
            <img src={card.imageName} height="100px" alt="" />
          </div>
        </div>
        <div className="card back">
          <div className="card-body  align-items-center">
            <p className="card-text m-0" style={{ fontSize: '13px' }}>{card.backTile}</p>
              <button className="btn btn-primary btn-sm" onClick={()=>universityDetails(card.route)}> More Info </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;