function Wrapper(props) {
  const style = {
    padding: "20px",
    backgroundColor: props.color,
    width: "250px",
    margin: "20px auto",
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
