import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <h1 className="coolShadow">Star Wars</h1>
      <h2 className="text1">Welcome to the Jedi Creator!</h2>
      <p className="text1">
        Here you can create a jedi or sith to send off into the Star Wars
        Universe
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://thenerdd.files.wordpress.com/2019/12/d_nq_np_463215-mlb25194406829_112016-o.jpg"
          alt="jedi/sith"
          height={350}
          style={{
            marginLeft: 150,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
