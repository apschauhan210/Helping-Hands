package com.springBoot.helpingHands.helper;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HelperRepository extends JpaRepository<Helper, Long> {

    @Query("SELECT h FROM Helper h WHERE h.email = ?1")
    Optional<Helper> findHelperByEmail(String email);

    Optional<Helper> findHelperByPhone(String phone);

//	@Query("SELECT h FROM Helper h WHERE h.locations LIKE '%' || ?1 || '%'")
//	List<Helper> findHelperByLocation(String locations);

//	@Query("SELECT h FROM Helper h WHERE h.locations IN ?1")
//	List<Helper> findByLocation(String location);
}
