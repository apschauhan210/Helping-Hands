package com.springBoot.helpingHands.client;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

	Optional<Client> findClientByEmail(String email);

	Optional<Client> findClientByPhone(String phone);
	
}
