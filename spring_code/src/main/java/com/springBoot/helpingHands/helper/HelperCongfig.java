//package com.springBoot.helpingHands.helper;
//
//import org.springframework.context.annotation.Configuration;
//
//import com.springBoot.helpingHands.Location;
//
//import java.time.LocalDate;
//import java.time.Month;
//import java.util.ArrayList;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//
//@Configuration
//public class HelperCongfig {
//
//    @Bean
//    CommandLineRunner helperCommandLineRunner(HelperRepository repository) {
//        return args -> {
//
//            Helper Kanta = new Helper(
//                    "Kanta Awasthi",
//                    "kanta@gmail.com",
//                    "kanta@123",
//                    "7898342156",
//                    null,
//                    LocalDate.of(1995, Month.JANUARY, 5),
//                    new ArrayList<>(getDomains()),
//                    new Location("Odisha", "Bhubaneswar", 208007));            
//
//            repository.save(Kanta);
//
//        };
//
//
//    }
//
//    private static ArrayList<String> getDomains() {
//        ArrayList<String> domainsForKanta = new ArrayList<>();
//        domainsForKanta.add("Maid");
//        domainsForKanta.add("Baby sitter");
//        return domainsForKanta;
//    }
//
////	private static ArrayList<String> getLocations() {
////		ArrayList<String> locationsForKanta = new ArrayList<>();
////		locationsForKanta.add("Bara Banki");
////		locationsForKanta.add("Bhusa Toli");
////		return locationsForKanta;
////	}
//}
