package com.cyberspies.cyberspies.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    private String username;
    private String pwd;
    private Long coins;
    @OneToMany( cascade = {CascadeType.ALL})
    private List<RewardVoucher> rewardsVouchers = new ArrayList<RewardVoucher>();

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Long getCoins() {
        return coins;
    }

    public void setCoins(Long coins) {
        this.coins = coins;
    }

    public List<RewardVoucher> getRewardsVouchers() {
        return rewardsVouchers;
    }

    public void setRewardsVouchers(List<RewardVoucher> rewardsVouchers) {
        this.rewardsVouchers = rewardsVouchers;
    }

    public User() {

    }
}
