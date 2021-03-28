function Radio(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type={props.type}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Radio;
