import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white w-2/4 m-auto mt-16 p-5">
        <div className="flex justify-around gap-96">
          <div className="flex gap-5">
            <img className="w-20 rounded-full"
              src="https://avatars.githubusercontent.com/u/146006914?v=4"
              alt=""
            />
            <div className="mt-3">
              <p className="text-base whitespace-nowrap">Mohammad Kaif</p>
              <p className="text-base whitespace-nowrap text-gray-500">Wednesday at 8:00 PM</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
