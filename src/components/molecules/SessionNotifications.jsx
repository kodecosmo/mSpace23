const SessionNotifications = () => {
  return (
    <section className="flex flex-col items-start mx-auto max-w-6xl w-full justify-center gap-12 mt-5">
      <div className="overflow-hidden flex flex-col justify-start items-start w-full max-w-4xl mx-auto rounded-md">
        {/* Question */}
        <div className="flex flex-col items-start gap-3 border rounded-xl border-text-color w-full">
          <div className="flex flex-col items-start gap-3 m-5 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="tags flex items-start gap-2">
                <h3 className="text-text-color font-semibold text-lg">
                  Error print user.default swift 3
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <p className=" text-sm text-text-color pr-9">
                  <span className=" text-slate-400">
                    Request sent 21 mins ago
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-between">
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80"
                  alt="profilePic"
                  className=" h-14 w-14 rounded-full"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <div>
                    <p className="text-md text-text-color font-medium">
                      Kaviru Happuarachchi
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-color">
                      This is the answer for the question but it seems you
                      haven't understood the topic that well. Lets have a
                      session...
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 pr-8">
                  <div>
                    <a href="#" className="p-2 bg-primary-700 rounded-lg text-white font-semibold hover:bg-text-color transition duration-200 ease-in-out">Accept</a>
                  </div>
                  <div>
                    <a href="#" className="text-md text-text-color font-medium p-2 rounded-lg hover:bg-slate-400 hover:text-white transition duration-300 ease-in-out">Ignore</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionNotifications;
