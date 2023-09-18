import SignIn from "../components/SignIn";
import Provider from "../components/Provider";

export default function Home() {
  return (
    <>
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center ">
        <div className="text-center w-full flex justify-center ">
          <Provider>
            <SignIn />
          </Provider>
        </div>
      </div>
    </>
  );
}
