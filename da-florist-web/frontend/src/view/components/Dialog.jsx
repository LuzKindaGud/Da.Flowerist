import './components-style/dialog.css';

const Dialog = ({ isOpen, onClose, title, message, type = 'success' }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <div className={`dialog-icon ${type}`}>
          {type === 'success' ? '✓' : '✕'}
        </div>
        <h3 className="dialog-title">{title}</h3>
        <p className="dialog-message">{message}</p>
        <button className="dialog-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Dialog;
