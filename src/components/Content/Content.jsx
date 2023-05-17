import "./Content.styles.scss";
import NccLogo from "../../assets/images/logoNCC.png";
import ContentItems from "../ContentItems/ContentItems";

function Content() {
  return (
    <section className="content">
      <div className="content-logo">
        <img src={NccLogo} alt="ncc logo" />
      </div>

      <div className="content-text">
        <p className="content-text--title">Lorem ipsum dolor sit asmet?</p>
        <p className="content-text--p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>

      <ContentItems />
    </section>
  );
}

export default Content;
