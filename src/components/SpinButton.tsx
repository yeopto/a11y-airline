import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [addMinusState, setAddMinusState] = useState<string | null>(null);

  const increment = () => {
    if (count >= 3) return;
    setCount((prevCount) => prevCount + 1);
    setAddMinusState("추가");
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
    setAddMinusState("감소");
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label>성인</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className="tooltip">최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <div>
          <button
            aria-label="성인 탑승자 한명 줄이기"
            onClick={decrement}
            className="spinButton"
          >
            -
          </button>
          <input
            id="adultCount"
            type="tel"
            role="spinbutton"
            readOnly
            className="spinButtonInput"
            value={count}
            maxLength={1}
            aria-label={`성인 승객 ${addMinusState} ${count}`}
            aria-live="assertive"
          />
          <button
            onClick={increment}
            className="spinButton"
            aria-label="성인 탑승자 한명 늘리기"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpinButton;
