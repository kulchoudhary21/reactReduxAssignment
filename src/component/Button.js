function Button(props) {
  return (
    <button
      className="btn btn-primary"
      type={props.type}
      onClick={props.onClick}
    >
      {props.msg}
    </button>
  );
}
export default Button;
