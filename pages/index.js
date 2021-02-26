import Head from '../src/Head';
import { NavBar } from '../src/NavBar';
import Upload from '../src/Upload';

export default function Home() {
  return (
    <div className="container">
      <Head />
      <main>
        <NavBar />
        <Upload />
      </main>
    </div>
  )
}
