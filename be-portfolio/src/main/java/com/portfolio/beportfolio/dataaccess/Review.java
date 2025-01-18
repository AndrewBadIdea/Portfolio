package com.portfolio.beportfolio.dataaccess;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "reviewer_name") // Map to the correct database column
    private String name;

    @Column(name = "reviewer_company") // Map to the correct database column
    private String company;

    @Column(name = "review_text") // Map to the correct database column
    private String message;

    private Integer rating;

    // Constructors
    public Review() {}

    public Review(String name, String company, String message, Integer rating) {
        this.name = name;
        this.company = company;
        this.message = message;
        this.rating = rating;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
