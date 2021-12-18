import React from "react";
import testimonial1 from "../Media/testimonial11.jpg";
import testimonial2 from "../Media/testimonial22.jpg";
import testimonial3 from "../Media/testimonial33.jpg";

function Content() {
  return (
    <section className="content pb-2" id="Content">
      <h2 className="content_title">
        People are choosing plant-based foods because there are no reasons not
        to!
      </h2>
      <div className="content_testimonials">
        <div className="content_testimonials_section">
          <div>
            <img
              src={testimonial1}
              className="content_testimonials_img"
              alt="testimonial one"
            />
            <p className="content_testimonials_text mx-3">
              "Amazing products with natural and organic ingredients. Great
              macronutrients ratio. Saving animals' lives and helping the Planet
              now doesn't come with any comprises. My family and I love Save The
              Meal.
            </p>
          </div>
          <p className="content_testimonals_name">
            <strong>Daniela F.</strong>
            <span>Verified Customer</span>
            <div className="content_testimonials_stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </p>
        </div>
        <div className="content_testimonials_section">
          <div>
            <img
              src={testimonial2}
              className="content_testimonials_img"
              alt="testimonial two"
            />
            <p className="content_testimonials_text mx-3">
              "I wanted to reduce my meat consumption, but I didn't know where
              to start. I am glad I found out these incredible products. Now, I
              enjoy eating and making delicious vegan foods. Thanks Save The
              Meal."
            </p>
          </div>
          <p className="content_testimonals_name">
            <strong>Robert P.</strong>
            <span>Verified Customer</span>
            <div className="content_testimonials_stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </p>
        </div>
        <div className="content_testimonials_section">
          <div>
            <img
              src={testimonial3}
              className="content_testimonials_img"
              alt="testimonial three"
            />
            <p className="content_testimonials_text mx-3">
              "Sensationally tasteful products. I discovered great and easy
              recipes. I love Save The Meal because it empowers me through my
              journey to be a better version of myself."
            </p>
          </div>
          <p className="content_testimonals_name">
            <strong>Natasha T.</strong>
            <span>Verified Customer</span>
            <div className="content_testimonials_stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Content;
