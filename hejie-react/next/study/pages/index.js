import "./index.scss"
import Head from "next/head"
import dynamic from "next/dynamic"
const DynamicComponent = dynamic(import("../components/hello"), {
  loading: () => <p>加载中</p>
})
import Link from "next/link"

function Test(props) {
  console.log("TCL: ", "nha")
}

export default function() {
  return (
    <div className='main'>
      <Head>
        <title>这是next官网</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
      </Head>
      Click
      <DynamicComponent />
      <Link href='/client'>
        {/* <a>客户端</a> */}
        <p>点击</p>
      </Link>
      <h1 style={{ color: "red" }}>Page indesaflksjdax</h1>
    </div>
  )
}
