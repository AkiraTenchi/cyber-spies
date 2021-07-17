package com.cyberspies.cyberspies.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class RewardVoucher {

    @Id
    @GeneratedValue
    private long id;
    private String imageUrl;
    private String name;
    private String description;
    private String linkUrl;

    public RewardVoucher(String name, String description, String linkUrl) {
        this.imageUrl = "https://via.placeholder.com/150";
        this.name = name;
        this.description = description;
        this.linkUrl = linkUrl;
    }

    public RewardVoucher(String imageUrl, String name, String description, String linkUrl) {
        this.imageUrl = imageUrl;
        this.name = name;
        this.description = description;
        this.linkUrl = linkUrl;
    }

    public RewardVoucher() {

    }

    public long getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getLinkUrl() {
        return linkUrl;
    }


}
