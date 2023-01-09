const Statistics = (props) => {
    const {good, neutral, bad} = props
  const all = () => good + neutral + bad;
  const average = () => (good - bad) / all();
  const positive = () => (good / all()) * 100;
  return (
    <>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all()}</p>
      <p>Average {average()}</p>
      <p>Positive {positive()}%</p>
    </>
  );
};

export default Statistics
