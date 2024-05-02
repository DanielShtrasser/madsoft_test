interface Props<T> {
  questions: T[];
  progress: number;
}

export default function Progressbar<T>({ questions, progress }: Props<T>) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {questions.map((_, index) => (
        <span
          style={{
            minWidth: "10px",
            width: "100%",
            height: "8px",
            backgroundColor:
              index < progress
                ? "black"
                : index === progress
                ? "#b92a35"
                : "gray",
          }}
          key={index}
        ></span>
      ))}
    </div>
  );
}
