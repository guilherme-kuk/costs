import ProjectForm from "../project/ProjectForm";

export default function NewProject() {
  return(
    <div className="newproject_container">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços.</p>
      <ProjectForm />
    </div>
  );
};