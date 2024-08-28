import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white w-1/3 m-auto mt-10 p-5">
        <div className="flex justify-around gap-44">
          <div className="flex gap-3">
            <img
              className="w-14 rounded-full"
              src="https://avatars.githubusercontent.com/u/146006914?v=4"
              alt=""
            />
            <div className="mt-3">
              <p className="text-sm whitespace-nowrap">Mohammad Kaif</p>
              <p className="text-sm whitespace-nowrap text-gray-500">
                Wednesday at 8:00 PM
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <br />
        <div className="paragraph">
          <p className="text-black">
            I Got The First Position In The Teckno Kids Course Of Saylani Mass It
            Training Program.  <span>
            Sir Rizwan, thank you for treating me and the entire class so well Learning</span>
          </p>
          <br />
          <p className="text-sm text-blue-500">#Rizwan Bhatti  #Saylani Mass It Training Program</p>
        </div>
        <br />
        <div>
        <img className="w-auto h-1/4" src="../assets/my-awards.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
