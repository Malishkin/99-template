function ResetButton({ onClick }) {
  const buttonStyle = { backgroundColor: "lightcoral" };
  return (
    <div>
      <button onClick={onClick} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
}
export default ResetButton;
