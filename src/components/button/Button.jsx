const Button = ({ children, action, style }) => {
  return (
    <button
      type="button"
      className={`${style} text-sm px-5 py-2.5 mb-2 rounded`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
