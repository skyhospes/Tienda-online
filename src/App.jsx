import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Card from "./components/Card"

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 px-8">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          <div className="rounded-2xl mb-4">
            <img src="https://images4.alphacoders.com/115/thumb-1920-1151249.jpg" alt="" className="w-full h-[350px] object-cover object-top rounded-2xl" />
          </div>
          <div className="flex items-center justify-center flex-wrap gap-10">
            <Card img="https://w0.peakpx.com/wallpaper/629/747/HD-wallpaper-god-of-war-ragnarok.jpg"
                  title="God of War ragnarok"
                  category="PS5"
                  price="75"
            />
            <Card img="https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/1dy5w3SNiJnXjP8YvmydCL9X.png"
                  title="Horizon Forbidden Westk"
                  category="PS5"
                  price="41"
            />
            <Card img="https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png"
                  title="Red Dead Redemption 2"
                  category="PS5"
                  price="25"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
