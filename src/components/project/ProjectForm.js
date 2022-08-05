// importando hooks
import { useState, useEffect } from "react";
// 

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({ btnText }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
     // request de GET
    fetch("http://localhost:5000/categories", {
      method: "GET",
      // tipo da comunicação
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // transformar e retornar a resposta em json
    .then((resp) => resp.json())
    // adicinar os dados no hook
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <form className="form">
      <Input 
        type="text" 
        text="Nome do Projeto" 
        name="name" 
        placeholder="Insira o nome do projeto" 
      />

      <Input 
        type="number" 
        text="Orçamento do Projeto" 
        name="budget" 
        placeholder="Insira o orçamento total" 
      />

      <Select name="category_id" text="Selecione a categoria" options={categories}/>

      {/* btnText - reaproveitamento vindo do component NewProject */}
      <SubmitButton text={btnText}/>
    </form>
  )
}