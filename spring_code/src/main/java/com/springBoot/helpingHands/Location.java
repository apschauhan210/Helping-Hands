package com.springBoot.helpingHands;

public class Location {
    private String state;
    private String city;
    private Integer zip;

    public Location() {
        // TODO Auto-generated constructor stub
    }

    /**
     * @param state
     * @param city
     * @param zip
     */
    public Location(String state, String city, Integer zip) {
        super();
        this.state = state;
        this.city = city;
        this.zip = zip;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    @Override
    public String toString() {
        return "Location [state=" + state + ", city=" + city + ", zip=" + zip + "]";
    }


}
