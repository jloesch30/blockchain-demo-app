import CreateUserPanel from "../../components/admin/CreateUserPanel";
import Nav from "../../components/nav/Nav";

const Admin = () => {
  return (
    <>
      <Nav></Nav>
      <div className="flex justify-center items-center">
        <CreateUserPanel></CreateUserPanel>
      </div>
    </>
  );
};

export default Admin;
