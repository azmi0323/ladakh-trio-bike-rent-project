import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container my-5">
      <div>
        <h1>Different between <span className="orange">inline-block and block elements?</span></h1>
        <p>
          Inline elements that take up only as much space as needed and can fit
          around the content of elements on the same line. Inline elements has
          no hieght and width. it will fit on the same line as other text and
          will not show up on a new line nor take more space than its contents.
          A block element will take up the full width available to it by
          default, which does not allow for other elements to appear on the same
          line. inline-block Like inline elements but can also have a width and
          a height to separate itself from nearby elements. Can appear on the
          same line as other elements by default.
        </p>
      </div>
      <div>
        <h1>What is <span className="orange">semantic tag?</span></h1>
        <p>
          HTML5 markers are used to format content-these markers tell the
          cybersurfer how to display the content on the runner. Semantic HTML5
          addresses this failing by defining specific markers to indicate easily
          what part is played by the content those markers contain Semantic
          markers make it clear to the cybersurfer what the meaning of a runner
          and its contentis.That clarity is also communicated with hunt
          machines, icing that the right runners are delivered for the right
          queries. some semantic label illustration abbr, acronym, blockquote,
          address, div etc.
        </p>
      </div>
      <div>
        <h1>What is <span className="orange">context API?</span></h1>
        <p>
          Result Environment API is a point of React that allows to partake
          state across the entire app. The Context API is a React structure that
          enables to change unique details and assists in working mount-drilling
          from all situations of operation. This is the volition to' mount
          drilling'or moving props from grandparent to child to parent, and so
          on. Environment is designed to partake data that can be considered'
          global'for a tree of React factors.React.createContext () is returns a
          consumer and a provider. Provider is a element that as it's names
          suggests provides the state to its children. It'll hold the' store'and
          be the parent of all the factors that might need that store. Consumer
          as it so happens is a element that consumes and uses the state.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
