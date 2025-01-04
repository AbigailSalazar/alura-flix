import styles from "./FormGroup.module.css";

function FormGourp({ label, type, placeholder, options, color }) {
  const borderStyle = { border: `2px solid ${color}` };
  return (
    <div className={styles.form_group}>
      <label>{label}</label>
      {type === "select" ? (
        <select className={styles.input} name="categoria" style={borderStyle}>
          {options.map((option) => (
            <option className={styles.input} key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          style={borderStyle}
          className={styles.input}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          style={borderStyle}
          className={styles.input}
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FormGourp;
