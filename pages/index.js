import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my crazy app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>


      </main>
      
    <article class="regular">
      <h2>Textbox</h2>

      <label for="tbuser">Username:</label>
      <input type="text" id="tbuser" placeholer="Enter Text"></input>

      <input type="button" id="btn1" value="Click Me"></input>

      <p class="output" id="output1"></p>


    </article>

    <script>
      const txt1 = document.getElementById('tbuser');
      const btn1 = documnet.getElementById('btn1');
      const ou1 = document.getElementById('output1');
      
      function fun1() {
        out1.innerHTML = txt1.value
      }

      btn1.addEventListener('click, fun1');

    </script>


      <Footer />
    </div>
  )
}
