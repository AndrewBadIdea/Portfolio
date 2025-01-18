CREATE TABLE IF NOT EXISTS review (
                                      id SERIAL PRIMARY KEY,
                                 reviewer_name VARCHAR(255),
    reviewer_company VARCHAR(255),
    review_text TEXT,
    rating INTEGER
    );
