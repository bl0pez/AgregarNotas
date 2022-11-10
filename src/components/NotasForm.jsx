import { useEffect, useMemo, useState } from 'react';
import { useForm } from '../hooks/useForm';

const initialState = { nota: '' };

export const NotasForm = ({ addNota }) => {

  const { nota, onInputChange, onResetForm } = useForm(initialState);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if(nota.trim().length < 3) {
      setError("La Nota debe tener al menos 3 caracteres");
      return;
    }

    addNota(nota.toLowerCase());
    onResetForm();
  }

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);
  }, [error]);

  return (
    <>
      <h2 className="text-center py-4">Agrega una nota</h2>

      <form
        className="d-grid gap-3"
        onSubmit={handleSubmit}
      >
        <div>
          <input type="text"
            className="form-control form-control-lg"
            placeholder="Escribe una nota"
            name="nota"
            value={nota}
            onChange={onInputChange}
          />
          <span className={`text-danger ${error ? "d-inline-block" : "d-none"}`}>*{error}</span>
        </div>
        <input
          type="submit"
          className="btn btn-primary "
          value="Agregar" />
      </form>

    </>
  )
}
