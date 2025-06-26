 // In Button.js
const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-500 transition `}
    >
      {text}
    </button>
  );
};

export default Button;
