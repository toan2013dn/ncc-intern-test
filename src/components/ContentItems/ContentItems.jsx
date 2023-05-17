import "./ContentItems.styles.scss";
import CssLogo from "../../assets/images/css.png";
import HtmlLogo from "../../assets/images/html.png";
import UrlLogo from "../../assets/images/url.png";

function ContentItems() {
  const contentItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      image: CssLogo,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      image: HtmlLogo,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      image: UrlLogo,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
  ];

  return (
    <div className="content-items">
      {contentItems.map((item) => (
        <div className="content-item" key={item.id}>
          <div className="content-item-title">
            <p className="text">{item.title}</p>
          </div>
          <div className="content-item-styles">
            <p>
              <img src={item.image} alt="content item" />
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentItems;
