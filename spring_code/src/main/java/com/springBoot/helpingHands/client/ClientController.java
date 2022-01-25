package com.springBoot.helpingHands.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "client")
public class ClientController {
	private final ClientService clientService;

	/**
	 * @param clientService
	 */
	@Autowired
	public ClientController(ClientService clientService) {
		super();
		this.clientService = clientService;
	}
	
	@GetMapping(path = "find")
	public ResponseEntity<Client> getClient(@RequestParam String email) {
		return new ResponseEntity<Client>(clientService.getClient(email), HttpStatus.OK);
	}
	
	@PostMapping(path = "add")
	public ResponseEntity<Client> addClient(@RequestBody Client client) {
		return new ResponseEntity<Client>(clientService.addNewClient(client), HttpStatus.CREATED);
	}
}
