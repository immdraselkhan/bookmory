import React from 'react';

const Faq = () => {
  return (
    <article className="p-5 bg-white mt-10 rounded-lg shadow">
      <div className="container flex flex-col justify-center p-5 space-y-5">
        <h2 className="text-2xl py-5 font-semibold sm:text-4xl">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does react work?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Differences between Props &amp; useState?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">Both useState and props in react are used to control data into a component, generally props are set by parent and passed to child components and they are fixed throughout the component. For data that is going to change, we have to use state. And props are immutable while states are mutable, if you want to change props you can do from parent component and then pass it to child components.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why we use useEffect except data load from API?</summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">Usages of useEffect except fetching &amp; updating API data:
              <li>1. Running on state change: validating input field</li>
              <li>2. Running on state change: live filtering</li>
              <li>3. Running on state change: trigger animation on new array value</li>
            </p>
          </details>
        </div>
      </div>
    </article>
  )
}

export default Faq