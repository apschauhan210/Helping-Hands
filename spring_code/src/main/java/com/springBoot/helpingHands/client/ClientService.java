package com.springBoot.helpingHands.client;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class ClientService {
	
	private final ClientRepository clientRepository;
	
	public ClientService(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}
	
	public Client getClient(String email) {
		return clientRepository.findClientByEmail(email).orElseThrow(() -> new IllegalStateException("The email id you entered doesn't belong to an account. "
				+ "Please check your email and try again.\n"));
	}
	
	public Client addNewClient(Client client) {
		Optional<Client> clientByEmail = clientRepository.findClientByEmail(client.getEmail());
		Optional<Client> clientByPhone = clientRepository.findClientByPhone(client.getPhone());
		
		if(clientByEmail.isPresent()) {
			throw new IllegalStateException("The email is already taken");
		}
		if(clientByPhone.isPresent()) {
			throw new IllegalStateException("The phone number is already taken");
		}
		
		clientRepository.save(client);
		return client;
	}
}
