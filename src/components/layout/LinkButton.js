import { Link } from "react-router-dom";

export default function LinkButton ({to, text}) {
  return(
    // link dinamico
    <Link className="btn" to={to}>
      {/* texto dinamico */}
      {text}
    </Link>
  )
}