const Text = ({ data }) => {
  return (
    <>
      <q>{data[0].quote}</q>
      <span>{data[0].name}</span>
      <span>{data[0].title}</span>
    </>
  );
};

export default Text;
