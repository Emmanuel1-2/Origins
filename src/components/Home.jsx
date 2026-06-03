import React from "react";
import { Link } from "react-router-dom";
import Productbox from "./Productbox";
import Accordion from "./Accordion";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    alert(`You have successfully subscribed to the newsletter with email ${data.email}`);
    const emailEl = document.getElementById("emailInput");
    if (emailEl) emailEl.value = "";
  }

  function moveProductsLeft() {
    const productsCon = document.getElementById("homeProducts");
    if (productsCon) productsCon.scrollBy({ left: -330, behavior: "smooth" });
  }

  function moveProductsRight() {
    const productsCon = document.getElementById("homeProducts");
    if (productsCon) productsCon.scrollBy({ left: 330, behavior: "smooth" });
  }

  return (
    <div className="home-container">
      <div className="con-of-hero-con">
        <div className="hero-container">
          <div className="hero-text-container">
            <p id="hero-text1">Own Your Skin With Every Drop</p>
            <p id="hero-text2">
              For those who refuse to blend in, feel confident in their skin,
              powerful in their presence and fearless in their expression.
            </p>
            <div className="">
              <span className="shop-now">
                <Link className="first-link" to="/product">
                  Shop Now
                </Link>
              </span>
              <span className="learn-more">
                <Link className="first-link" to="/product">
                  Learn more
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="first-products-container">
        <div className="first-products-con">
          <Link to="/product">
            <img
              className="first-products"
              src="https://images.unsplash.com/photo-1679394042175-717ca34ef0f2?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={380}
              loading="lazy"
              alt=""
            />
          </Link>
          <div className="first-products-text">
            <p className="first-products-small-text">THE SPIRIT OF ELEGANCE </p>
            <p className="first-products-big-text">Glow.</p>
            <p className="first-products-big-text">Naturally.</p>
            <p className="first-products-big-text">Luxuriously.</p>
            <p>
              Our innovative skincare line leverages cutting-edge green science
              and premium ingredients to enhance your skin's natural radiance.
            </p>
            <span
              className="shop-now"
              style={{ borderRadius: "15px", padding: "13px 15px" }}
            >
              <Link className="first-link" to="/product">
                Explore Origins
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="essential-care-container">
        <div className="essential-wrapper">
          <div className="essential-title">
            <p className="essential-text">Essential care for your skin</p>
            <div
              className="moveProductsCon"
              style={{ display: "flex", gap: "10px" }}
            >
              <span onClick={moveProductsLeft} className="moveProductsBtn" id="less">
                <i style={{ color: "grey" }} className="fa-solid fa-less-than"></i>
              </span>{" "}
              <span onClick={moveProductsRight} className="moveProductsBtn" id="great">
                <i style={{ color: "grey" }} className="fa-solid fa-greater-than"></i>
              </span>
            </div>
          </div>

          <div className="essential-care-products" id="homeProducts">
            <Productbox
              product={
                "https://images.unsplash.com/photo-1679394042175-717ca34ef0f2?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              productName={"The Ordinary Foundation SPF 50"}
              productAdv={"Sun protection, UV exposure"}
              price={205.0}
            />

            <Productbox
              product={
                "https://images.unsplash.com/photo-1775989982439-610be22c8c7b?q=80&w=498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              productName={"Ela De Pure Hyaluronic Acid"}
              productAdv={"Hydrates and plumps skin"}
              price={79.99}
            />

            <Productbox
              product={
                "https://images.unsplash.com/photo-1698545038590-d92d6460bfa2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              productName={"TINY Vitamin C Serum"}
              productAdv={"Brightens skin"}
              price={98.72}
            />

            <Productbox
              product={
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              productName={"Necessaire Body Lotion"}
              productAdv={"Moisturizes and softens skin"}
              price={51.27}
            />
            <Productbox
              product={
                "https://plus.unsplash.com/premium_photo-1752089322306-3d57928d4e2f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              productName={"Green Light Body Lotion"}
              productAdv={"Moisturizes and softens skin"}
              price={121.37}
            />
          </div>
        </div>
      </div>

      <div className="radiance-container">
        <div className="radiance-wrapper">
          <img
            className="radiance-img"
            src="https://plus.unsplash.com/premium_photo-1677283511255-b99767d42a48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
            alt=""
          />

          <div className="radiance-text-con">
            <div className="radiance-text">
              <p className="radiance-first-text">Pure Radiance and Beauty.</p>
              <p className="radiance-sec-text">
                Discover the transformative power of our skincare products,
                meticulously crafted to enhance your natural beauty and
                radiance. Our collection combines cutting-edge science with
                luxurious ingredients to deliver visible results. From
                rejuvenating serums to nourishing moisturizers, each product is
                designed to elevate your skincare routine and unveil your skin's
                true potential. Experience the ultimate in skincare excellence
                and embrace a radiant, confident you.
              </p>
              <span
                className="shop-now"
                style={{ borderRadius: "15px", padding: "13px 15px" }}
              >
                <Link className="first-link" to="/product">
                  Explore Origins
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-by-cat-container">
        <div className="shop-by-cat-title">
          <p>Shop by Categories</p>
        </div>

        <div className="shop-by-cat-wrapper">
          <div className="shop-by-cat-img-con">
            <Link to={"/category/Cosmetics"}>
              <img
                className="shop-by-cat-img"
                src="https://images.unsplash.com/photo-1710301616379-74c9a2514017?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt=""
              />
              <div id="first-cat-text" className="shop-by-cat-text">
                Cosmetics
              </div>
            </Link>
          </div>

          <div className="shop-by-cat-img-con">
            <Link to={"/category/Skincare"}>
              <img
                className="shop-by-cat-img"
                src="https://plus.unsplash.com/premium_photo-1683133990522-4155deaacbbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy"
                alt=""
              />
              <div id="second-cat-text" className="shop-by-cat-text">
                Skin Care
              </div>
            </Link>
          </div>

          <div className="shop-by-cat-img-con">
            <Link to={"/category/BodyCare"}>
              <img
                className="shop-by-cat-img"
                src="https://plus.unsplash.com/premium_photo-1679046949226-b9d0870ab9c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
                loading="lazy"
                alt=""
              />
              <div id="third-cat-text" className="shop-by-cat-text">
                Body Care
              </div>
            </Link>
          </div>

          <div className="shop-by-cat-img-con">
            <Link to={"/category/HairCare"}>
              <img
                id="fourth-cat-img"
                className="shop-by-cat-img"
                src="https://plus.unsplash.com/premium_photo-1658506780171-03ad7daca24e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0"
                loading="lazy"
                alt=""
              />
              <div id="fourth-cat-text" className="shop-by-cat-text">
                Hair Care
              </div>
            </Link>
          </div>

          <div className="shop-by-cat-img-con">
            <Link to={"/product"}>
              <img
                id="fifth-cat-img"
                className="shop-by-cat-img"
                src="https://plus.unsplash.com/premium_photo-1679046949226-b9d0870ab9c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
                loading="lazy"
                alt=""
              />
              <div id="fifth-cat-text" className="shop-by-cat-text">
                Explore more on Origins
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="get-20-container">
        <div className="get-20-wrapper">
          <p className="get-20-first-text">Get 20% off on all Origins skincare products!</p>
          <p className="get-20-sec-text">Elevate your beauty routine now.</p>
          <span className="shop-now" style={{ borderRadius: "15px", padding: "13px 20px", backgroundColor: "#4b4847", marginTop: "20px" }}>
            <Link className="first-link" to="/product">Shop Now</Link>
          </span>
        </div>
      </div>

      <div className="faq-section">
        <p className="faq-title">Frequently Asked Questions</p>
        <Accordion />
      </div>

      <div className="customer-feedback-container">
        <div className="customer-feedback-wrapper">
          <div className="customer-feedback-title-con">
            <p className="customer-feedback-title">Experience <br /> The Elegance With Origins</p>
          </div>

          <div className="customer-feedback-con">
            <div className="customer-feedback-content">
              <img className="customer-feedback-img" src="https://images.unsplash.com/photo-1599022484220-967921f2217c?q=80&w=371&auto=format&fit=crop&ixlib=rb-4.1.0" loading="lazy" alt="" />
              <div className="customer-feedback-text">
                <p className="customer-feedback-first-text">Glowing Skin, All Day!</p>
                <p className="customer-feedback-sec-text">I've been using Origins face serum and my skin feels so soft and radiant.</p>
                <div className="customer-feedback-stars-con"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                <div className="customer-feedback-profile-con">
                  <img className="customer-feedback-profile-img" src="https://plus.unsplash.com/premium_photo-1705018500148-383c65193a0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0" loading="lazy" alt="" />
                  <div className="customer-feedback-profile-text">
                    <p className="customer-feedback-profile-name">Jessica</p>
                    <p className="customer-feedback-profile-role"><i className="fa-solid fa-circle-check"></i>Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="customer-feedback-content">
              <img className="customer-feedback-img" src="https://images.unsplash.com/photo-1665763630810-e6251bdd392d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0" loading="lazy" alt="" />
              <div className="customer-feedback-text">
                <p className="customer-feedback-first-text">Instant Skin Revival And Glow</p>
                <p className="customer-feedback-sec-text">The instant results are amazing and long-lasting.</p>
                <div className="customer-feedback-stars-con"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                <div className="customer-feedback-profile-con">
                  <img className="customer-feedback-profile-img" src="https://plus.unsplash.com/premium_photo-1705018500148-383c65193a0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0" loading="lazy" alt="" />
                  <div className="customer-feedback-profile-text">
                    <p className="customer-feedback-profile-name">Alex</p>
                    <p className="customer-feedback-profile-role"><i className="fa-solid fa-circle-check"></i>Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="newsletter-container" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="newsletter-wrapper">
          <p className="newsletter-title">Join our Origins newsletter and Get Exclusive offers</p>
          <div className="newsletter-email-container">
            <input className="newsletter-input" id="emailInput" type="email" placeholder="Your Email" {...register("email", {required: "Email is required"})} />
            <br />
            <button className="newsletter-button" type="submit">Subscribe</button>
          </div>
          <br />
          {errors.email && <p style={{color: "crimson"}}>{errors.email.message}</p>}
        </div>
      </form>

    </div>
  );
}