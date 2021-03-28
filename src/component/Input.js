function Input(props) {
  return (
    <div className="mb-3 form-control">
      <input
        className="form-control"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Input;
