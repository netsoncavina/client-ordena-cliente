import "./App.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AppBar from "./components/AppBar/AppBar";
import Client from "./components/Client/Client";

function App() {
  const [order, setOrder] = useState("");
  const [clients, setClients] = useState([]);

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const getClients = async (order) => {
    order ? (order = `${order}`) : (order = "");
    const response = await fetch(`http://localhost:5000/clients/${order}`);
    const data = await response.json();
    setClients(data);
  };

  useEffect(() => {
    getClients(order);
  }, [order]);

  return (
    <>
      <AppBar />
      <Box sx={{ maxWidth: 200 }} className="filter-selection">
        <FormControl fullWidth>
          <InputLabel id="filter-select">Ordenar</InputLabel>
          <Select
            labelId="filter-select"
            id="filter-select"
            value={order}
            label="filter"
            onChange={handleChange}
          >
            <MenuItem value={"ascName"}>Nome</MenuItem>
            <MenuItem value={"ascDate"}>Data de cadastro</MenuItem>
            <MenuItem value={"ascFee"}>Mensalidade</MenuItem>
            <MenuItem value={"ascPhone"}>Telefone</MenuItem>
            <MenuItem value={"ascStatus"}>Status</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="client-list">
        {clients.map((client) => (
          <Client
            name={client.nome}
            date={new Date(client.dataRegistro).toLocaleDateString()}
            phone={client.telefone}
            fee={client.mensalidade}
            status={client.ativo ? "Ativo" : "Inativo"}
          />
        ))}
      </div>
    </>
  );
}

export default App;
