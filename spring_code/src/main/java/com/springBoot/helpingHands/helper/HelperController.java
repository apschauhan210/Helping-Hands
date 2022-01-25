package com.springBoot.helpingHands.helper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springBoot.helpingHands.client.Client;

@RestController
@RequestMapping(path = "helper")
public class HelperController {

    private final HelperService helperService;

    /**
     * @param helperService
     */
    @Autowired
    public HelperController(HelperService helperService) {
        super();
        this.helperService = helperService;
    }

    @GetMapping
    public ResponseEntity<List<Helper>> getHelpers() {
        return new ResponseEntity<List<Helper>>(helperService.getHelpers(), HttpStatus.OK);
    }

    @GetMapping(path = "find")
    public ResponseEntity<Helper> getHelperByEmail(@RequestParam String email) {
    	return new ResponseEntity<Helper>(helperService.getHelperByEmail(email), HttpStatus.OK);
    }
    
//	@GetMapping(path = "find/{location}")
//	public ResponseEntity<List<Helper>> getHelperByLocation(@PathVariable("location") String location) {
//		return new ResponseEntity<>(helperService.getHelperByLocation(location), HttpStatus.OK);
//	}

    @PostMapping(path = "add")
    public ResponseEntity<Helper> addNewHelper(@RequestBody Helper helper) {
        Helper newHelper = helperService.addNewHelper(helper);
        return new ResponseEntity<Helper>(newHelper, HttpStatus.CREATED);
    }

    @PutMapping(path = "addofferingclient/{helperEmail}")
    public ResponseEntity<Helper> addOfferingClient(@PathVariable("helperEmail") String helperEmail,
    		@RequestBody Client client){
    	return new ResponseEntity<Helper>(helperService.addOfferingClient(helperEmail, client), HttpStatus.OK);
    }
}
