import React from "react";
import "./Contents.css";
import Hacker from "../images/hacker.jpg";
import OutOfTheBox from "../images/out_of_the_box_resized.jpg";

function Contents() {
  return (
    <div className="some-page-wrapper">
      <div className="column-heading">
        <h1>
          <i>A Brief About The Company</i>
        </h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="blue-column">
            <h3>Who we help in our mission</h3> <br />
            Some Text in Column One Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One. Some
            Text in Column One Some Text in Column One Some Text in Column One
            Some Text in Column One Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One Some Text
            in Column One Some Text in Column One Some Text in Column One Some
            Text in Column One Some Text in Column One
          </div>
        </div>
        <div className="column">
          <div className="green-column">
            <h3>What can we do for you</h3> <br />
            Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column Some Text
            in Column Two Some Text in Column One Some Text in Column One Some
            Text in Column One Some Text in Column One Some Text in Column One v
            v Some Text in Column One Some Text in Column Some Text in Column
            Two Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One v v Some
            Text in Column One Some Text in Column
          </div>
        </div>
        <div className="column">
          <div className="orange-column">
            <h3>Who is the Team</h3> <br /> <br />
            Some Text in Column Two Some Text in Column One Some Text in Column
            One Some Text in Column One Some Text in Column One Some Text in
            Column One v v Some Text in Column One Some Text in Column Some Text
            in Column Two Some Text in Column One Some Text in Column One Some
            Text in Column One Some Text in Column One Some Text in Column One v
            v Some Text in Column One Some Text in Column Some Text in Column
            Two Some Text in Column One Some Text in Column One Some Text in
            Column One Some Text in Column One Some Text in Column One v v Some
            Text in Column One Some Text in Column
          </div>
        </div>
      </div>
      <br />
      <div className="security">
        <div>
          <p>
            <h3>Security is what we care about First</h3>
            <br />
            Security is very essencial now adays , consectetur adipiscing
            elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor
            consequat urna. Morbi a bibendum metus. Donec scelerisque
            sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in
            pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis pharetra
            luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis
            posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi
            ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at
            maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus
            bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget
            bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra
            est a, bibendum metus.
          </p>
        </div>

        <div>
          <img src={Hacker} id="hacker" />
        </div>
      </div>
      <br />

      <div className="security" id="out-of-the-box-only">
        <div>
          <img src={OutOfTheBox} id="out-of-the-box" />
        </div>

        <div>
          <p>
            <h3>We Think Out of the Box</h3>
            <br />
            We can help you in any idea you come up with, consectetur adipiscing
            elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor
            consequat urna. Morbi a bibendum metus. Donec scelerisque
            sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in
            pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis pharetra
            luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis
            posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi
            ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at
            maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus
            bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget
            bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra
            est a, bibendum metus.ut ipsum egestas, sed sollicitudin elit convallis.
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget
            bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra
            est a, bibendum metus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contents;
