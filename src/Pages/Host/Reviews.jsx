import React from "react";
import { BsStarFill } from "react-icons/bs"

const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
];

 function Reviews() {
    const reviewCounts = reviewsData.reduce((acc, review) => {
        acc[review.rating] = (acc[review.rating] || 0) + 1;
        return acc;
    }, { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

    const total = reviewsData.length;

    const getBarColor = (star) => {
        if (star >= 3) return "#FF8C38";  // yellow
        return "#d32f2f"; // red
    };

    return(
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <section className="host-reviews-overall">
                <p>
                    <h1>5.0</h1>
                </p>
                <BsStarFill className="star" />
                <p>overall rating</p>
                
            </section>
            <div style={{ width: "100%", color: "#4D4D4D" }}>
            {Object.entries(reviewCounts)
                .sort((a, b) => b[0] - a[0])
                .map(([star, count]) => {
                    const percent = total > 0 ? (count / total) * 100 : 0;
                    return (
                        <div
                            key={star}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "6px",
                                fontSize: "14px",
                            }}
                        >
                            <div style={{ width: "25px" }}>{star} ★</div>
                            <div
                                style={{
                                    flex: 1,
                                    background: "#B9B9B9",
                                    height: "8px",
                                    borderRadius: "5px",
                                    margin: "0 8px",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        width: `${percent}%`,
                                        backgroundColor: getBarColor(Number(star)),
                                        height: "100%",
                                    }}
                                />
                            </div>
                            <div style={{ width: "40px", textAlign: "right" }}>
                                {`${percent}%`}
                            </div>
                        </div>
                    );
                })}
        </div>

        <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}

        </section>
    )
}

export default Reviews ;