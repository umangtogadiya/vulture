import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../shared/productCard";

const ProductSlider = (props: any) => {
  const { products } = props;
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
  };

  return (
    <Slider {...settings} className="single_product_thumb">
      {products.map((product: any) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Slider>
  );
};

export default ProductSlider;
