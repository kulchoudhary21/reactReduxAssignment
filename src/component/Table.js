import Button from "./Button";

function Table(props) {
  return (
    <div>
      <table className="table">
        <thead className="table-secondary">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">Gender</th>
            <th scope="col">Education</th>
          </tr>
        </thead>
        {props.data.map((obj, index) => {
          return (<tbody className="table-primary">
              <tr className="primary">
                <th scope="row">{index + 1}</th>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.date}</td>
                <td>{obj.gender}</td>
                <td>{obj.select}</td>
                
                <Button
                  msg="delete"
                  type="submit"
                  onClick={() => props.onDelete(index)}
                />
                <Button
                  msg="edit"
                  type="submit"
                  onClick={() => props.onEdit(index)}
                />
              </tr>
              
            </tbody>
            
          );
        })}
      </table>
    </div>
  );
}
export default Table;
