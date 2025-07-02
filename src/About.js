const About = ({ update }) => {
  return (
    <div>
      <h3>Child </h3>
      <button onClick={() => update("text pass from child to parent")}>
        send to parent{" "}
      </button>
    </div>
  );
};

export default About;
