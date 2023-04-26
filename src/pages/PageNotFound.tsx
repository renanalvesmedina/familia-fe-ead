import { Header } from "../components/Header";
import illustration from "../assets/404Error.svg"

export function PageNotFound() {
  return (
    <main className="w-full h-screen bg-zinc-900">
      <div className="flex h-full items-center flex-col">
        <Header />

        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <img src={illustration} className="w-96" alt="" />
          <h1 className="text-xl">Página em Desenvolvimento!</h1>
        </div>
      </div>
    </main>
  )
}
