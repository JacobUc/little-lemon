import person1 from '../images/person1.jpg'
import person2 from '../images/person2.jpg'
import person3 from '../images/person3.jpg'

export function Testimonials(){
    return (
        <section className="testimonials-section">
            <div className="testimonials-wrapper">
                <h2>Testimonials</h2>
                <div className="testimonials-container">
                <div className="testimonial-card">
                    <img src={person1} alt="Kenji" />
                    <div className="stars">★★★★★</div>
                    <p>
                    Amazing food and a great vibe! Every dish was a flavor explosion. Definitely a must-try in town!
                    </p>
                    <strong>Kenji T.</strong>
                </div>
                <div className="testimonial-card">
                    <img src={person2} alt="John" />
                    <div className="stars">★★★★★</div>
                    <p>
                    Excellent service and delicious meals. This has quickly become one of my favorite local spots.
                    </p>
                    <strong>John B.</strong>
                </div>
                <div className="testimonial-card">
                    <img src={person3} alt="Maria" />
                    <div className="stars">★★★★★</div>
                    <p>
                    So glad we found this gem! The food was fantastic and the atmosphere was lovely. A highlight of our trip!
                    </p>
                    <strong>Maria K.</strong>
                </div>
                </div>
            </div>
        </section>
    )
}