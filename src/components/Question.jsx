export default function Question({ data, selected, setSelected }) {
  return (
    <div>
      <h4
        className="mb-3"
        dangerouslySetInnerHTML={{ __html: data.question }}
      />
      <div className="d-grid gap-2">
        {data.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            className={`btn ${
              selected === opt
                ? "btn-primary"
                : "btn-outline-secondary"
            }`}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
}
