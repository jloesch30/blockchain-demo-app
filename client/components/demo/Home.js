const Home = () => {
  return (
    <div className="mt-36">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-mono font-extrabold mb-2">
          Demo walk through
        </h1>
        <p className="text-center">
          Below you will see a list of users that this application hosts, please
          click on one to view their profile
        </p>
      </div>
      <div>{}</div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  // logic to get users

  return {
    props: {},
  };
}
