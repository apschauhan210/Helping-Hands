package com.springBoot.helpingHands.helper;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Columns;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import com.springBoot.helpingHands.Location;
import com.springBoot.helpingHands.LocationType;
import com.springBoot.helpingHands.client.Client;

//@TypeDef(name = "Location", typeClass = LocationType.class, defaultForType = Location.class)
@Entity
@Table
public class Helper implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name = "helper_sequence", sequenceName = "helper_sequence", allocationSize = 1)
    @GeneratedValue(generator = "helper_sequence", strategy = GenerationType.SEQUENCE)
    @Column(updatable = false, nullable = false)
    private Long id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String name;

    @Column(unique = true)
    private String email;
    
    @Column(nullable = false)
    private String password;

    @Column(unique = true, nullable = false)
    private String phone;

    private LocalDate dob;

    @Transient
    private Integer age;

//	@Column(updatable = false, nullable = false)
//	private String hCode;

//    private String imageUrl;
    
    @Column(columnDefinition = "MEDIUMBLOB")
    private String imgData;

    @Column(nullable = false)
    private ArrayList<String> domains;
    
    @Column
    private ArrayList<String> offeringClientsEmails;

//	@Column(nullable = false)

    @Columns(columns = {@Column(name = "state"),
            @Column(name = "city"), @Column(name = "zip")})
    @Type(type = "com.springBoot.helpingHands.LocationType")
    private Location location;


    public Helper() {

    }

    /**
     * @param name
     * @param email
     * @param phone
     * @param imageUrl
     * @param domains
     * @param location
     */
    public Helper(String name, String email, String password, String phone, String imageUrl, String imgData, LocalDate dob, ArrayList<String> domains,
                  Location location) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
//        this.imageUrl = imageUrl;
        this.imgData = imgData;
        this.dob = dob;
        this.domains = domains;
        this.location = location;
        this.offeringClientsEmails = new ArrayList<String>();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

//    public String getImageUrl() {
//        return imageUrl;
//    }
//
//    public void setImageUrl(String imageUrl) {
//        this.imageUrl = imageUrl;
//    }

    public String getImgData() {
		return imgData;
	}

	public void setImgData(String imgData) {
		this.imgData = imgData;
	}

	public ArrayList<String> getDomains() {
        return domains;
    }

    public void setDomains(ArrayList<String> domains) {
        this.domains = domains;
    }

    public ArrayList<String> getOfferingClients() {
		return offeringClientsEmails;
	}

	public void setOfferingClients(ArrayList<String> offeringClients) {
		this.offeringClientsEmails = offeringClients;
	}
	
	public void addOfferingClient(String offeringClientEmail) {
		if(this.offeringClientsEmails == null) {
			this.offeringClientsEmails = new ArrayList<String>();
			this.offeringClientsEmails.add(offeringClientEmail);
			return;
		}
		if(!this.offeringClientsEmails.contains(offeringClientEmail)) {
			this.offeringClientsEmails.add(offeringClientEmail);
		}
	}

	public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }

//	public String gethCode() {
//		return hCode;
//	}
//
//	public void sethCode(String hCode) {
//		this.hCode = hCode;
//	}

    @Override
    public String toString() {
        return "Helper [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", age=" + age
                + ", domains=" + domains + ", location=" + location + "]";
    }


}
