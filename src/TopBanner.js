import "./topBanner.scss";
import closeIcon from "./close-icon.svg";

export function TopBanner({ onRemove }) {
  return (
    <div className="top-banner">
      <p>
        Je suis une belle <span className="top-banner__banner">bannière</span>
      </p>
      <button onClick={onRemove} className="top-banner__close-button">
        <img
          className="top-banner__close-icon"
          src={closeIcon}
          alt="close-icon"
        />
      </button>
    </div>
  );
}
