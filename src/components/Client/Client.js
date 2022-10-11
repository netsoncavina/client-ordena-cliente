export default function Client(props) {
  return (
    <div className="client">
      <div className="client-name">
        <h2>{props.name}</h2>
      </div>
      <div className="client-info">
        <p>
          <strong>Telefone:</strong> {props.phone}
        </p>
        <p>
          <strong>Data de cadastro:</strong> {props.date}
        </p>
        <p>
          <strong>Mensalidade:</strong> {props.fee}
        </p>
        <p>
          <strong>Status:</strong> {props.status}
        </p>
      </div>
    </div>
  );
}
